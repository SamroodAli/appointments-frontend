import { createPortal } from 'react-dom';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { QueryCache, MutationCache } from 'react-query';
import { useEffect } from 'react';
import { NotificationContainer } from 'react-notifications';
import useActions from '../hooks/useActions';

const sidebarContainer = document.getElementById('sidebar');

const Sidebar = () => {
  const { currentUser: { username } } = useSelector((state) => state);
  const { signout } = useActions();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
      document.querySelector('body').classList.toggle('active');
    });
  }, []);

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
      to: '#', text: 'Sign Out', locked: !username, onClick: onSignOut,
    },

  ].filter(({ locked }) => !locked).map((link) => (
    <li key={link.to}>
      <Link to={link.to} className={location.pathname === link.to ? 'active' : ''} onClick={link.onClick}>{link.text}</Link>
    </li>
  ));

  return createPortal(
    <>
      <NotificationContainer />
      <div className="profile">
        <h2 className="text-4xl font-mono bg-green-900 text-white p-5">
          <Link to="/">Codezilla</Link>
        </h2>
      </div>
      <ul id="navLinks">
        {links}
      </ul>
    </>,
    sidebarContainer,
  );
};

export default Sidebar;
