import { useNavigate } from 'react-router-dom';
import getTeachers from '../api/getTeachers';
import HorizontalScroll from './horizontal-scroll';
import useData from '../hooks/useData';

const Teachers = () => {
  const navigate = useNavigate();

  const { notReady, notReadyContent, data } = useData('teachers', getTeachers);

  if (notReady) {
    return notReadyContent;
  }

  // id has to be String for horizontal-scroll to work
  // shuffle the array
  const items = data
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
