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
    <div className="appointment-form-container">
      <form onSubmit={onSubmit} className="appointment-form">
        <div className="input-group mb-3">
          <label htmlFor="teacher" className="form-label">
            Teacher
            <input className="form-control-plaintext" id="teacher" value={name} readOnly />
          </label>
          <label htmlFor="username" className="form-label">
            Student
            <input className="form-control-plaintext" id="username" value={username} readOnly />
          </label>
        </div>
        <div className="input-group mb-3">
          <label htmlFor="date" className="form-label"> {/* eslint-disable-line */}
            Choose Date
            <DatePicker
              id="date"
              minDate={new Date()}
              selected={date}
              onChange={setDate}
            />
          </label>

          <label htmlFor="time">
            Choose Time
            <select
              className="form-select"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              {
                TIMES.map((time) => <option key={time} value={time}>{time}</option>)
              }
            </select>
          </label>
        </div>
        <input type="submit" className="btn appointment-button" value="Attend Course" />
      </form>
    </div>
  );
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Form;
