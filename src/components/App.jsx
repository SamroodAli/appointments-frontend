import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
