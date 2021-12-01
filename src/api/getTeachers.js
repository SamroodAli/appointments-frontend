import rails from './rails';

const getTeachers = async () => rails.get('/teachers');

export default getTeachers;
