import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import Teachers from './Teachers';
import Teacher from './Teacher';
import Appointments from './Appointments';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/teachers/:id/:color" element={<Teacher />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
