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

const TIMES = [
  'UTC +1 9:00',
  'UTC +1 12:00',
  'UTC +1 15:00',
];

const Form = ({ id, name }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(TIMES[0]);

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
    mutation.mutate({
      id: Number(id),
      date,
      time,
    });
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
        selected={date}
        onChange={setDate}
      />
      <label htmlFor="time">
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          {
            TIMES.map((time) => <option key={time} value={time}>{time}</option>)
          }
        </select>
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
