import { useQuery } from 'react-query';

const useData = (cacheKey, fetcher) => {
  const {
    isLoading, isError, data, error, isSuccess,
  } = useQuery(cacheKey, fetcher);

  let notReadyContent;
  const notReady = !isSuccess;

  if (isLoading) {
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

export default useData;
