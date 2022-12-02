import './App.scss';
import Homepage from '../src/pages/Homepage/Homepage.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    // <div className="app">
    //   <p>Test</p>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
