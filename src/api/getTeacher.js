import rails from './rails';

const getTeacher = async ({ queryKey }) => {
  // query key is [username,cachekey] and cachekey for getTeacher page is ['teacher','id']
  const id = queryKey[1][1];
  return rails.get(`/teachers/${id}`);
};

export default getTeacher;
