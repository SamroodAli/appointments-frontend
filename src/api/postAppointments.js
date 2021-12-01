import rails from './rails';

const postAppointments = async (teacherId) => rails.post('/appointments', { teacher_id: teacherId });

export default postAppointments;
