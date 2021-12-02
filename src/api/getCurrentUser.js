import rails from './rails';

const getTeacher = async () => rails.get('/auth/current_user');

export default getTeacher;
