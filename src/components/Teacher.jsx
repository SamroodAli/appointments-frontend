import { useParams } from 'react-router-dom';
import getTeacher from '../api/getTeacher';
import NewAppointmentForm from './NewAppointmentForm';
import useLockedData from '../hooks/useLockedData';

const COLOR_ENUM = [
  'indigo',
  'red',
  'green',
  'purple',
  'pink',
  'blue',
];

const Teacher = () => {
  const { id, color } = useParams();
  const bgColor = COLOR_ENUM[color % COLOR_ENUM.length];

  const {
    notReady, notReadyContent, data,
  } = useLockedData(['teachers', id], getTeacher);

  if (notReady) {
    return notReadyContent;
  }

  const { name } = data;

  return (
    <div className={`mx-auto grid items-center h-full bg-${bgColor}-100`}>
      <div className="lg:flex">
        <div className="sm:flex lg:grid justify-around items-center h-full lg:container">
          <div className="flex justify-center items-center h-full m-1">
            <img
              className={`hover:animate-bounce non-draggable ring-2 bg-${bgColor}-300 p-1 ring-${bgColor}-900 h-36 sm:h-56 mt-12 mb-4 sm:my-12 lg:h-72 mx-auto rounded-full lg:rounded`}
              src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
              alt="profile_picture"
            />
          </div>
          <div className="sm:w-7/12 lg:w-full px-8">
            <h1 className={`text-${bgColor}-900 text-center font-semi-bold uppercase font-mono text-3xl sm:text-5xl subpixel-antialiased xl my-3`}>
              {name}
            </h1>
            <p className="italic">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Totam sit voluptates veniam quas molestiae porro expedita sunt.
              Amet vitae cum illo at unde accusantium excepturi numquam dicta doloremque rem!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className={`w-full lg:pt-12 lg:bg-${bgColor}-200`}>
          <h2 className="m-12 sm:mt-0 text-xl sm:text-2xl text-center">
            Book an appointment with
            {' '}
            {name}
          </h2>
          <NewAppointmentForm id={id} name={name} color={bgColor} />
        </div>
      </div>
    </div>
  );
};

export default Teacher;
