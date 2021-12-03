import {
  useQuery,
} from 'react-query';
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

  // id has to be String for horizontal-scroll to work
  const items = data.data.map((teacher) => ({
    id: teacher.id,
    name: teacher.name,
  }));

  return (
    <div className="teachers-page">
      <h1 className="teachers-heading">Best in class Teachers</h1>
      <HorizontalScroll
        items={items}
      />
    </div>
  );
};
export default Teachers;
