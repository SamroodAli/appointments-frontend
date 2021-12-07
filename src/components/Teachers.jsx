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
  // shuffle the array
  const items = data.data
    .sort(() => Math.random() - 0.5)
    .map((teacher, idx) => ({
      id: teacher.id,
      name: teacher.name,
      index: idx,
    }));

  const onItemClick = (item) => {
    navigate(`/teachers/${item.id}/${item.index}`);
  };

  return (
    <div className="text-center grid grid-cols-1 items-center h-full">
      <h1 className="font-serif text-5xl lg:text-5xl mb-4">Best in class Teachers</h1>
      <HorizontalScroll items={items} onItemClick={onItemClick} />
    </div>
  );
};
export default Teachers;
