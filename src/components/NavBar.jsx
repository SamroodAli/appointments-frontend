import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useActions from '../hooks/useActions';

const NavBar = () => {
  const { currentUser: { username } } = useSelector((state) => state);
  const { signout } = useActions();
  const navigate = useNavigate();

  return (
    <div>
      {
        username && <button type="button" onClick={() => signout(navigate)}>Sign out</button>
      }
      {
        !username && (
          <>
            <Link to="/signup">Sign up</Link>
            <Link to="/signin">Sign in</Link>
          </>
        )
      }
      <Link to="/teachers">Teachers</Link>
      <Link to="/appointments">My Appointments</Link>
    </div>
  );
};

export default NavBar;
