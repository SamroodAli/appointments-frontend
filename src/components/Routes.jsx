import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Signup from './Signup';
import Signin from './Signin';

const AppRoutes = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
