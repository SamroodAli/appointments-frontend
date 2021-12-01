import getAppointments from '../api/getAppointments';
import useLockedRoute from '../hooks/useLockedRoute';

const Appointments = () => {
  const {
    notReady, notReadyContent, data,
  } = useLockedRoute('appointments', getAppointments);

  if (notReady) {
    return notReadyContent;
  }

  return (
    <ul>
      {data.map((appointment) => (
        <li key={appointment.id}>
          {appointment.teacher_id}
        </li>
      ))}
    </ul>
  );
};
export default Appointments;
