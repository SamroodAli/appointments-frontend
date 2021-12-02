import getAppointments from '../api/getAppointments';
import useLockedData from '../hooks/useLockedData';
import AppointmentsList from './AppointmentList';

const Appointments = () => {
  const {
    notReady, notReadyContent, data,
  } = useLockedData('appointments', getAppointments);

  if (notReady) {
    return notReadyContent;
  }

  return (
    <div>
      <h1>Appointments</h1>
      <h2>Today</h2>
      <AppointmentsList collection={data.today} />
      <h2>Upcoming</h2>
      <AppointmentsList collection={data.upcoming} />
      <h2>Past</h2>
      <AppointmentsList collection={data.past} />
    </div>
  );
};

export default Appointments;
