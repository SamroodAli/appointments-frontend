import { useEffect } from 'react';
import {
  useQuery,
} from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import getTeacher from '../api/getTeacher';
import NewAppointmentForm from './NewAppointmentForm';

const Teacher = () => {
  const { id } = useParams();
  const { username } = useSelector((state) => state.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate('/signin');
    }
  }, []);

  const {
    isLoading, isError, data, error,
  } = useQuery(`teacher-${id}`, () => getTeacher(id));

  if (!username) {
    return <div>Please sign in to access this page</div>;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return (
      <span>
        Error:
        {error.message}
      </span>
    );
  }

  const { name } = data.data;

  return (
    <div>
      <div>{name}</div>
      <NewAppointmentForm id={id} name={name} />
    </div>

  );
};
export default Teacher;
