import {
  useQuery,
} from 'react-query';
import { Link } from 'react-router-dom';
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
      {data.data.map((teacher) => (
        <li key={teacher.id}>
          <Link to={`/teachers/${teacher.id}`}>
            {teacher.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Teachers;
