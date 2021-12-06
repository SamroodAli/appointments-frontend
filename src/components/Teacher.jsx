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
    <div className="">
      <h1 className={`hidden text-${bgColor}-900 lg:block text-center font-semi-bold uppercase font-mono text-5xl subpixel-antialiased xl my-3`}>
        {name}
      </h1>
      <div className="lg:flex">
        <div className="flex lg:block items-center h-full">
          <div className="w-6/12">
            <img
              className={`hover:animate-bounce non-draggable ring-2 bg-${bgColor}-300 p-1 ring-${bgColor}-900 h-60 mx-auto rounded-full`}
              src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
              alt="profile_picture"
            />
          </div>
          <div className="w-6/12">
            <h1 className={`text-${bgColor}-900 lg:hidden text-center font-semi-bold uppercase font-mono text-5xl subpixel-antialiased xl my-3`}>
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
        <div className="w-full">
          <h2>Book an appointment</h2>
          <NewAppointmentForm id={id} name={name} color={bgColor} />
        </div>
      </div>
    </div>
  );
};
export default Teacher;
