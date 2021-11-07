import React from 'react';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      
      <Routes>   
            <Route path = "/" element = { <Header /> } />
      </Routes>
      
    </div>
  );
}

export default App;
