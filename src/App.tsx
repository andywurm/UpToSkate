import React, { useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './Components/AnimatedRoutes';
import Footer from './Components/Footer';

function App() {

  const [navColor, setNavColor] = useState<boolean>(true)

  return (
    <div className="App" style={{ }}>
      <div style={{height: "100%"}}>
        <Router>
          <Navigation />
          <AnimatedRoutes />
          <Footer />
        </Router>
      </div>
    </div >
  );
}

export default App;
