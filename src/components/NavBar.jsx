import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const { currentUser: { username } } = useSelector((state) => state);

  return (
    <div>
      {
        username && <Link to="/signout">Sign out</Link>
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
