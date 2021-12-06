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

const Form = ({ id, name, color }) => {
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
    <div className={`flex justify-center items-center h-full bg-${color}-300 p-8 w-6/12 ring-2 ring-${color}-900`}>
      <form onSubmit={onSubmit} className={`text-${color}-900`}>
        <div className="my-2">
          <label  htmlFor="teacher" >
            Teacher
            <input className="px-2" id="teacher" value={name} readOnly />
          </label>
        </div>
        <div className="my-2">
          <label  htmlFor="username">
            Student
            <input className="px-2" id="username" value={username} readOnly />
          </label>
        </div>
        <div className="my-2">
          <label  htmlFor="date"> {/* eslint-disable-line */}
            Choose Date
            <DatePicker
              calendarClassName={` ring-4 bg-${color}-200 ring-${color}-900`}
              id="date"
              minDate={new Date()}
              selected={date}
              onChange={setDate}
              // closeCalendar
            />
          </label>
          <div className="my-2">
          <label  htmlFor="time">
            Choose Time
            <select
              className="px-2"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              >
              {
                TIMES.map((time) => <option key={time} value={time}>{time}</option>)
              }
            </select>
          </label>
        </div>
          <input type="submit" className={`bg-${color}-600 hover:bg-{color }-900 p-2 mt-3 w-full text-white focus:outline-none focus:ring-2 focus:ring-${color}-600 focus:ring-opacity-50`} value="Book an appointment" />
              </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Form;
