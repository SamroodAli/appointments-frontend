import { useParams } from 'react-router-dom';
import getTeacher from '../api/getTeacher';
import NewAppointmentForm from './NewAppointmentForm';
import useLockedData from '../hooks/useLockedData';

const Teacher = () => {
  const { id } = useParams();

  const {
    notReady, notReadyContent, data,
  } = useLockedData(['teachers', id], getTeacher);

  if (notReady) {
    return notReadyContent;
  }

  const { name } = data;

  return (
    <div>
      <div>{name}</div>
      <NewAppointmentForm id={id} name={name} />
    </div>

  );
};
export default Teacher;
