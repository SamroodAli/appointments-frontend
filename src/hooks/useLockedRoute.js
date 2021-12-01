import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import useActions from './useActions';

const useLockedRoute = (cacheKey, fetcher) => {
  const navigate = useNavigate();
  const { signinError } = useActions();
  const { username } = useSelector((state) => state.currentUser);

  if (!username) {
    navigate('/signin');
  }

  const {
    isLoading, isError, data: { data }, error,
  } = useQuery(cacheKey, fetcher, {
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
  const notReady = !username || isLoading || isError;

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
    notReady, notReadyContent, data,
  };
};

export default useLockedRoute;
