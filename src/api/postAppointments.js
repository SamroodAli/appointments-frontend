import rails from './rails';

const postAppointments = async ({ id, date }) => rails.post('/appointments', {
  appointment: {
    teacher_id: id,
    date,
  },
});

export default postAppointments;
