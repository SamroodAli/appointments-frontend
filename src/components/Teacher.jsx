import {
  useQuery,
} from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import getTeacher from '../api/getTeacher';
import NewAppointmentForm from './NewAppointmentForm';
import useActions from '../hooks/useActions';

const Teacher = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const { signinError } = useActions();

  const {
    isLoading, isError, data, error,
  } = useQuery(`teacher-${id}`, () => getTeacher(id), {
    retry: (failureCount, error) => {
      if (error.response.status === 401) {
        signinError('You must be logged in to view this page');
        navigate('/signin');
        return false;
      }
      return true;
    },
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return (
      <span>
        Error:asda
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
