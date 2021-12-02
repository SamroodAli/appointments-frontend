import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import useActions from './useActions';
import getCurrentUser from '../api/getCurrentUser';

const useLockedData = (cacheKey, fetcher) => {
  const navigate = useNavigate();
  const { signinError, autoSignin } = useActions();
  const { username } = useSelector((state) => state.currentUser);

  // try to sign in if no current user
  // cache time zero because we authenticate with jwt token and not from cache
  useQuery(['currentUser', username], getCurrentUser, {
    enabled: !username,
    cacheTime: 0,
    onSuccess: ({ data: { username } }) => {
      autoSignin(username);
    },
    retry: (failureCount, error) => {
      if (error.response.status === 401) {
        signinError('You must be logged in to view this page');
        navigate('/signin');
        return false;
      }
      return true;
    },
  });

  // fetch data if current user
  const {
    isLoading, isError, data, error, isSuccess,
  } = useQuery(cacheKey, fetcher, {
    enabled: !!username,
    retry: (failureCount, error) => {
      if (error.response.status === 401) {
        signinError('You must be logged in to view this page');
        navigate('/signin');
        return false;
      }
      return true;
    },
  });

  let notReadyContent;
  const notReady = !isSuccess;

  if (!username) {
    notReadyContent = <div>Trying to sign you in</div>;
  } else if (isLoading) {
    notReadyContent = <span>Loading...</span>;
  } else if (isError) {
    notReadyContent = (
      <span>
        Error:asda
        {error.message}
      </span>
    );
  }

  return {
    // data.data because both react query and axios returns data in a property called data
    notReady, notReadyContent, data: data ? data.data : null,
  };
};

export default useLockedData;
