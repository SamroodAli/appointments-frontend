import rails from './rails';

const getTeacher = async (id) => rails.get(`/teachers/${id}`);

export default getTeacher;
