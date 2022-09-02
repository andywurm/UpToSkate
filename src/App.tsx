import React, { useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Skaters from './Pages/Skaters';
import Events from './Pages/Events';
import Results from './Pages/Results';
import Media from './Pages/Media';
import Home from './Pages/Home';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {

  const [navColor, setNavColor] = useState<boolean>(true)

  return (
    <Router>
      <div className="App">
        <div style={{
          height: "100vh",
          width: "100vw"
        }}>

          <Navigation />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Skaters" element={<Skaters/>} />
            <Route path="/Events" element={<Events/>}/>
            <Route path="/Results" element={<Results/>}/>
            <Route path="/Media" element={<Media/>}/>
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
