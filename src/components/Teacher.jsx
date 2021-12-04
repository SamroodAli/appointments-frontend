import { useParams } from 'react-router-dom';
import getTeacher from '../api/getTeacher';
import NewAppointmentForm from './NewAppointmentForm';
import useLockedData from '../hooks/useLockedData';

const Teacher = () => {
  const { id } = useParams();

  const {
    notReady, notReadyContent, data,
  } = useLockedData(['teachers', id], getTeacher);

  if (notReady) {
    return notReadyContent;
  }

  const { name } = data;

  return (
    <div className="teacher-page">
      <h1 className="text-center teacher-page-heading">
        {name}
      </h1>
      <div className="teacher-page-sections">
        <div className="teacher-section">
          <div className="img-fluid">
            <img
              className="teacher-image non-draggable mx-auto d-block"
              src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
              alt="profile_picture"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Totam sit voluptates veniam quas molestiae porro expedita sunt.
            Amet vitae cum illo at unde accusantium excepturi numquam dicta doloremque rem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <NewAppointmentForm id={id} name={name} />
      </div>
    </div>
  );
};
export default Teacher;
