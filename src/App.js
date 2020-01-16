import React from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './components/Section/Section';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
        <div className="HeaderRow">
          Basic Trello Board
        </div>
        <div className="BodyRow">
          <Main></Main>
        </div>
    </div>
  );
}

export default App;
