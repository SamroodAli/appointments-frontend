import rails from './rails';

const getAppointments = async () => rails.get('/appointments');

export default getAppointments;
