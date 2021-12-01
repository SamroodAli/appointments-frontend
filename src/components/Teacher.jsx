import {
  useQuery,
} from 'react-query';
import { useParams } from 'react-router-dom';
import getTeacher from '../api/getTeacher';
import NewAppointmentForm from './NewAppointmentForm';

const Teacher = () => {
  const { id } = useParams();

  const {
    isLoading, isError, data, error,
  } = useQuery(`teacher-${id}`, () => getTeacher(id));

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

  const { name } = data.data;

  return (
    <div>
      <div>{name}</div>
      <NewAppointmentForm id={id} name={name} />
    </div>

  );
};
export default Teacher;
