import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useActions from '../hooks/useActions';

const NavBar = () => {
  const { currentUser: { username } } = useSelector((state) => state);
  const { signout } = useActions();

  return (
    <div>
      {
        username && <button type="button" onClick={signout}>Sign out</button>
      }
      {
        !username && (
          <>
            <Link to="/signup">Sign up</Link>
            <Link to="/signin">Sign in</Link>
          </>
        )
      }
    </div>
  );
};

export default NavBar;
