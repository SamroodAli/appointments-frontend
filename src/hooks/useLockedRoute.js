import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import useActions from './useActions';

const useLockedRoute = (cacheKey, fetcher) => {
  const navigate = useNavigate();
  const { signinError } = useActions();

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

  return {
    isLoading, isError, data, error,
  };
};

export default useLockedRoute;
