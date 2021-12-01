import {
  useMutation,
  useQueryClient,
} from 'react-query';
import PropTypes from 'prop-types';
import postAppointments from '../api/postAppointments';

const Form = ({ id, name }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postAppointments, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('appointments');
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(id);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">
        <input value={name} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

Form.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Form;
