import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home"

const App = () => (
  <BroswerRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
