import { useParams } from 'react-router-dom';
import getTeacher from '../api/getTeacher';
import NewAppointmentForm from './NewAppointmentForm';
import useLockedData from '../hooks/useLockedData';

const COLOR_ENUM = [
  'indigo',
  'purple',
  'red',
  'green',
  'pink',
  'blue',
];

const Teacher = () => {
  const { id } = useParams();
  const color = COLOR_ENUM[id % COLOR_ENUM.length];

  const {
    notReady, notReadyContent, data,
  } = useLockedData(['teachers', id], getTeacher);

  if (notReady) {
    return notReadyContent;
  }

  const { name } = data;

  return (
    <div className="container">
      <h1 className={`hidden text-${color}-900 lg:block text-center font-semi-bold uppercase font-mono text-5xl subpixel-antialiased xl my-3`}>
        {name}
      </h1>
      <div className="pt-12">
        <div className="flex lg:block items-center h-full">
          <div className="w-6/12">
            <img
              className={`non-draggable ring-4 ring-${color}-900 h-60 mx-auto rounded-full`}
              src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
              alt="profile_picture"
            />
          </div>
          <div className="w-6/12">
            <h1 className={`text-${color}-900 lg:hidden text-center font-semi-bold uppercase font-mono text-5xl subpixel-antialiased xl my-3`}>
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
        <div className="flex justify-center mt-24">
          <NewAppointmentForm id={id} name={name} />
        </div>
      </div>
    </div>
  );
};
export default Teacher;
