import React from 'react';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase'
import Login from './components/Login';
import Spinner from 'react-spinkit'

function App() {
  const [user, loading] = useAuthState(auth)

  if(loading){
    return (
      <AppLoading>
        <AppLoadingContent>
            <img src="https://images-platform.99static.com/Hrj0IDVBktRdEibybcXiOLqpgtE=/102x102:921x921/500x500/top/smart/99designs-contests-attachments/91/91476/attachment_91476002" alt="" />

            <Spinner name = "chasing-dots" />
        </AppLoadingContent>
      </AppLoading>
    )
  }

  return (
    <div className="App">
       
              { !user ? (
                  <Login />
              ) : (
                <>
                  <Header />
                    <AppBody>
                      <Sidebar />
                          <Routes>
                            <Route path = "/" element = { <Chat /> }/>
                          </Routes>
                    </AppBody>
                </>
              )}   
          
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display : flex;
  height : 100vh;
`;

const AppLoading = styled.div`
    display : grid;
    place-items : center;
    height : 100vh;
    width : 100%;
`;

const AppLoadingContent = styled.div`
    text-align : center;  
    padding-bottom : 100px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;

    > img {
      object-fit: contain;
      height : 200px;
      margin-bottom : 40px;
    }
`;