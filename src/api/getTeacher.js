import rails from './rails';

const getTeacher = async ({ queryKey: id }) => {
  console.log(id);
  return rails.get(`/teachers/${id}`);
};

export default getTeacher;
