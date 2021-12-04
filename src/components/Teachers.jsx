import {
  useQuery,
} from 'react-query';
import { useNavigate } from 'react-router-dom';
import getTeachers from '../api/getTeachers';
import HorizontalScroll from './horizontal-scroll';

const Teachers = () => {
  const navigate = useNavigate();
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

  const onItemClick = (item) => {
    navigate(`/teachers/${item.id}`);
  };

  return (
    <div className="teachers-page">
      <h1 className="teachers-heading">Best in class Teachers</h1>
      <HorizontalScroll items={items} onItemClick={onItemClick} />
    </div>
  );
};
export default Teachers;
