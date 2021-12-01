import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import useActions from './useActions';

const useLockedRoute = (cacheKey, fetcher) => {
  const navigate = useNavigate();
  const { signinError, getCurrentUser } = useActions();
  const { username } = useSelector((state) => state.currentUser);

  const {
    isLoading, isError, data, error,
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
    getCurrentUser(navigate);
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

export default useLockedRoute;
