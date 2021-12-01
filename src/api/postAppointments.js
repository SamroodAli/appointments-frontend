import rails from './rails';

const postAppointments = async (teacherId) => rails.post('/appointments', {
  appointment: {
    teacher_id: teacherId,
  },
});

export default postAppointments;
