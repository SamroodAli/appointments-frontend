import * as React from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { QueryCache, MutationCache } from 'react-query';
import Sidebar from './sidebar';
import useActions from '../../hooks/useActions';

const sidebarContainer = document.getElementById('sidebar');

const SidebarContainer = () => {
  const { currentUser: { username } } = useSelector((state) => state);
  const { signout } = useActions();
  const navigate = useNavigate();
  const location = useLocation();

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
    <Link key={link.to} to={link.to} className={location.pathname === link.to ? 'active' : ''} onClick={link.onClick}>{link.text}</Link>
  ));

  return createPortal(
    <Sidebar links={links} />,
    sidebarContainer,
  );
};

export default SidebarContainer;
