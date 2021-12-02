import { createPortal } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { QueryCache, MutationCache } from 'react-query';
import useActions from '../hooks/useActions';

const navBarContainer = document.getElementById('navLinks');

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

  const links = [
    { to: '/teachers', text: 'Teachers', locked: false },
    { to: '/appointments', text: 'Appointments', locked: !username },
    { to: '/signin', text: 'Sign In', locked: !!username },
    { to: '/signup', text: 'Sign Up', locked: !!username },
    {
      to: '/signout', text: 'Sign Out', locked: !username, onClick: onSignOut,
    },

  ].filter(({ locked }) => !locked).map((link) => (
    <li key={link.to}>
      <Link to={link.to} className={window.location.pathname === link.to ? 'active' : ''}>{link.text}</Link>
    </li>
  ));

  return createPortal(
    links,
    navBarContainer,
  );
};

export default NavBar;
