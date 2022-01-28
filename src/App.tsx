import React from 'react';
import './App.css';
import { Navbar, Pokesearch } from './components/header';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
        <Pokesearch></Pokesearch>
      </header>
      
    </div>
  );
}

export default App;
