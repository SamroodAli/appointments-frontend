import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <Link to="/signup">Sign up</Link>
    <Link to="/signin">Sign in</Link>
  </div>
);

export default NavBar;
