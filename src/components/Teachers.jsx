import {
  useQuery,
} from 'react-query';
import getTeachers from '../api/getTeachers';

const Teachers = () => {
  const {
    isLoading, isError, data, error,
  } = useQuery('todos', getTeachers);

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
    <ul>
      {data.map((teacher) => (
        <li key={teacher.name}>{teacher.name}</li>
      ))}
    </ul>
  );
};
export default Teachers;
