import React from 'react';
import './App.css';
import { Maingrid } from './components/content';
import { Navbar, Pokesearch } from './components/head';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
        <Pokesearch></Pokesearch>
        <Maingrid></Maingrid>
      </header>
      
    </div>
  );
}

export default App;
