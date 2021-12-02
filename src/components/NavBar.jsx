import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { QueryCache, MutationCache } from 'react-query';
import useActions from '../hooks/useActions';

const NavBar = () => {
  const { currentUser: { username } } = useSelector((state) => state);
  const { signout } = useActions();
  const navigate = useNavigate();

  const onSignOut = () => {
    signout();
    new QueryCache().clear();
    new MutationCache().clear();
    navigate('/');
  };

  // <div>
  //   {
  //     username && (
  //       <>
  //         <button type="button" onClick={onSignOut}>Sign out</button>
  //         <Link to="/appointments">My Appointments</Link>
  //       </>
  //     )
  //   }
  //   {
  //     !username && (
  //       <>
  //         <Link to="/signup">Sign up</Link>
  //         <Link to="/signin">Sign in</Link>
  //       </>
  //     )
  //   }
  //   <Link to="/teachers">Teachers</Link>
  // </div>
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="profile">
          <img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt="profile_picture" />
          <h3>Anamika Roy</h3>
          <p>Designer</p>
        </div>
        <ul>
          <li>
            <a href="/" className="active">
              <span className="icon"><i className="fas fa-home" /></span>
              <span className="item">Home</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="icon"><i className="fas fa-desktop" /></span>
              <span className="item">My Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="icon"><i className="fas fa-user-friends" /></span>
              <span className="item">People</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="icon"><i className="fas fa-tachometer-alt" /></span>
              <span className="item">Perfomance</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="icon"><i className="fas fa-database" /></span>
              <span className="item">Development</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="icon"><i className="fas fa-chart-line" /></span>
              <span className="item">Reports</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="icon"><i className="fas fa-user-shield" /></span>
              <span className="item">Admin</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="icon"><i className="fas fa-cog" /></span>
              <span className="item">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
