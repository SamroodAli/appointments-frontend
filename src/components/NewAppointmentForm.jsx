import {
  useMutation,
  useQueryClient,
} from 'react-query';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import postAppointments from '../api/postAppointments';

const Form = ({ id, name }) => {
  const { username } = useSelector((state) => state.currentUser);
  const queryClient = useQueryClient();
  const mutation = useMutation(postAppointments, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('appointments');
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(Number(id));
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="teacher">
        Teacher
        <input id="teacher" value={name} readOnly />
      </label>
      <label htmlFor="username">
        Username
        <input id="username" value={username} readOnly />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Form;
