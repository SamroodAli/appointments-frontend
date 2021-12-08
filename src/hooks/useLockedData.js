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
      NotificationManager.warning('Please log in to view this page');
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
    notReadyContent = (
      <button type="button" className="bg-green-500 p-2  top-0 w-full" disabled>
        <p className="font-mono animate-pulse">Trying to log you in</p>
      </button>
    );
  } else if (isLoading) {
    notReadyContent = (
      <button type="button" className="bg-yellow-500 p-2  top-0 w-full" disabled>
        <p className=" font-mono animate-pulse">Loading</p>
      </button>
    );
  } else if (isError) {
    notReadyContent = (
      <button type="button" className="bg-red-500 p-2  top-0 w-full" disabled>
        <p className="font-mono animate-pulse">{error.message}</p>
      </button>
    );
  }

  return {
    notReady, notReadyContent, data: data ? data.data : null,
  };
};

export default useLockedData;
