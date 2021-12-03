import {
  useQuery,
} from 'react-query';
import { Link } from 'react-router-dom';
import getTeachers from '../api/getTeachers';
import HorizontalScroll from './horizontal-scroll';

const Teachers = () => {
  const {
    isLoading, isError, data, error,
  } = useQuery('teachers', getTeachers);

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

  const items = data.data.map((teacher) => ({
    id: teacher.id,
    name: teacher.name,
  }));

  return (
    <HorizontalScroll
      items={items}
    />
  );
};
export default Teachers;
