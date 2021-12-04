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
      <div className="teacher-page-teacher-section">
        <h1 className="text-center">{name}</h1>
        <div className="img-fluid">
          <img
            className="teacher-image non-draggable mx-auto d-block"
            src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
            alt="profile_picture"
          />
        </div>
      </div>
      <NewAppointmentForm id={id} name={name} />
    </div>

  );
};
export default Teacher;
