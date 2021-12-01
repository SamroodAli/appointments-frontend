import {
  useQuery,
} from 'react-query';
import getAppointments from '../api/getAppointments';

const Appointments = () => {
  const {
    isLoading, isError, data, error,
  } = useQuery('appointments', getAppointments);

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
      {data.data.map((appointment) => (
        <li key={appointment.id}>
          {appointment.teacher_id}
        </li>
      ))}
    </ul>
  );
};
export default Appointments;
