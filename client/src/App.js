import './App.scss';
import Homepage from '../src/pages/Homepage/Homepage.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Homepage1 from './pages/Homepage1/Hompage1';
import Homepage2 from './pages/Homepage2/Homepage2';
import Homepage3 from './pages/Homepage3/Homepage3';
import Homepage4 from "./pages/Homepage4/Homepage4";
import Homepage5 from './pages/Homepage5/Homepage5';
import Homepage6 from './pages/Homepage6/Homepage6';
import Homepage7 from './pages/Homepage7/Homepage7';
import Homepage8 from './pages/Homepage8/Homepage8';



function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path="/home1" element={<Homepage1 />} />
        <Route path="/home2" element={<Homepage2 />} />
        <Route path="/home3" element={<Homepage3 />} />
        <Route path="/home4" element={<Homepage4 />} />
        <Route path="/home5" element={<Homepage5 />} />
        <Route path="/home6" element={<Homepage6 />} />
        <Route path="/home7" element={<Homepage7 />} />
        <Route path="/home8" element={<Homepage8 />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
