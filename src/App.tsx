import React, { useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>

function App() {

  const [navColor, setNavColor] = useState<boolean>(true)

  return (
    <div className="App">
      <div style={{
      height: "100vh",
      width: "100vw"
    }}>
      <Navigation/>
      </div>
    </div>
  );
}

export default App;
