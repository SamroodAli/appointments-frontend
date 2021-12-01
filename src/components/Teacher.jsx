import { useParams } from 'react-router-dom';
import getTeacher from '../api/getTeacher';
import NewAppointmentForm from './NewAppointmentForm';
import useLockedRoute from '../hooks/useLockedRoute';

const Teacher = () => {
  const { id } = useParams();

  const fetchTeacher = () => getTeacher(id);

  const {
    isLoading, isError, data, error,
  } = useLockedRoute(`/teachers/${id}`, fetchTeacher);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return (
      <span>
        Error:asda
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
