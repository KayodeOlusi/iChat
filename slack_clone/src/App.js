import React from 'react';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      
      <Header />
        <AppBody>
          <Sidebar />
          <Routes>   
              <Route path = "/" />
          </Routes>
        </AppBody>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display : flex;
  height : 100vh;
`;
