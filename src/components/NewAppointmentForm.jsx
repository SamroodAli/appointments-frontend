import {
  useMutation,
  useQueryClient,
} from 'react-query';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import postAppointments from '../api/postAppointments';
import 'react-datepicker/dist/react-datepicker.css';

const Form = ({ id, name }) => {
  const { username } = useSelector((state) => state.currentUser);
  const queryClient = useQueryClient();
  const [startDate, setStartDate] = useState(new Date());
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
      <DatePicker
        id="date"
        minDate={new Date()}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Form;
