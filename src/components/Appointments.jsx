import getAppointments from '../api/getAppointments';
import useLockedData from '../hooks/useLockedData';

const Appointments = () => {
  const {
    notReady, notReadyContent, data,
  } = useLockedData('appointments', getAppointments);

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
