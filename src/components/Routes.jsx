import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Signup from './Signup';
import Signin from './Signin';
import Teachers from './Teachers';
import Teacher from './Teacher';

const AppRoutes = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/teachers/:id" element={<Teacher />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
