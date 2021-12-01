import {
  useQuery,
} from 'react-query';
import getTeacher from '../api/getTeachers';

const Teacher = () => {
  const {
    isLoading, isError, data, error,
  } = useQuery('todos', getTeacher);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return (
      <span>
        Error:
        {error.message}
      </span>
    );
  }

  return (
    <div>{data.data.name}</div>
  );
};
export default Teacher;
