import React from 'react';
import logo from './logo.svg';
import './App.css';
import './font/Campton Book Bold.otf'
import './font/Mont Heavy DEMO.otf'
import './font/Galano Grotesque DEMO Bold.otf'

function App() {
  return (
    <div className="App" style={{fontFamily: "Galano Grotesque DEMO"}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{fontSize: 50}}>
          Chase <span style={{color: "#F3B95A"}}>Andersen</span>
          {/* #49b2ad */}
        </p>
      </header>
    </div>
  );
}

export default App;
