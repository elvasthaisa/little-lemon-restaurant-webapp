import './App.css';

import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Reservations from './Pages/Reservations';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/menu" element={<Homepage />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order" element={<Homepage />} />
        <Route path="/login" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
