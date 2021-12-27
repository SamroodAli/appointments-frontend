import rails from './rails';

const postAppointments = async ({ id, date, time }) => rails.post('/appointments', {
  appointment: {
    teacher_id: id,
    date,
    time,
  },
});

export default postAppointments;
