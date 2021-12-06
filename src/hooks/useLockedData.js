import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import useActions from './useActions';
import getCurrentUser from '../api/getCurrentUser';

const useLockedData = (cacheKey, fetcher) => {
  const navigate = useNavigate();
  const { signinError, autoSignin, storeRedirect } = useActions();
  const { username } = useSelector((state) => state.currentUser);

  const onFailure = (failureCount, error) => {
    if (error.response.status === 401) {
      NotificationManager.warn('Please log in to view this page');
      signinError('You must be logged in to view this page');
      storeRedirect(window.location.pathname);
      navigate('/signin');
      return false;
    }
    return true;
  };

  // try to sign in if no current user
  // cache time zero because we authenticate with jwt token and not from cache
  useQuery(['currentUser', username], getCurrentUser, {
    enabled: !username,
    cacheTime: 0,
    onSuccess: ({ data }) => {
      autoSignin(data.current_user);
    },
    retry: onFailure,
  });

  // fetch data if current user
  const {
    isLoading,
    isError,
    data,
    error,
    isSuccess,
  } = useQuery([username, cacheKey], fetcher, {
    enabled: !!username,
    retry: onFailure,
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
    notReady, notReadyContent, data: data ? data.data : null,
  };
};

export default useLockedData;
