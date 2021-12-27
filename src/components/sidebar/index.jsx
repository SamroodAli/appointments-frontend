import * as React from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { QueryCache, MutationCache } from 'react-query';
import Sidebar from './Sidebar';
import useActions from '../../hooks/useActions';

const sidebarContainer = document.getElementById('sidebar');

const SidebarContainer = () => {
  const { currentUser: { username } } = useSelector((state) => state);
  const { signout } = useActions();
  const navigate = useNavigate();

  const onSignOut = () => {
    navigate('/');
    signout();
    new QueryCache().clear();
    new MutationCache().clear();
  };

  const links = [
    { to: '/', text: 'Home' },
    { to: '/teachers', text: 'Teachers', locked: false },
    { to: '/appointments', text: 'Appointments', locked: !username },
    { to: '/signin', text: 'Sign In', locked: !!username },
    { to: '/signup', text: 'Sign Up', locked: !!username },
    {
      to: '#', text: 'Sign Out', locked: !username, onClick: onSignOut,
    },

  ].filter(({ locked }) => !locked);

  return createPortal(
    <Sidebar links={links} />,
    sidebarContainer || document.body,
  );
};

export default SidebarContainer;
