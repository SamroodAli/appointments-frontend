const AppointmentsList = ({ collection }) => collection.map(
  (appointment) => (
    <li key={appointment.id}>
      <p>{appointment.date}</p>
      <p>{appointment.time}</p>
      <p>{appointment.teacher.name}</p>
    </li>
  ),
);

export default AppointmentsList;
