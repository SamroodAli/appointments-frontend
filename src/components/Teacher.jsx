import {
  useQuery,
} from 'react-query';
import { useParams } from 'react-router-dom';
import getTeacher from '../api/getTeachers';

const Teacher = () => {
  const { id } = useParams();

  const {
    isLoading, isError, data, error,
  } = useQuery('todos', () => getTeacher(id));

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
