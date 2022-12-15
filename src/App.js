//npm install react-router-dom
//npm install axios
//npm install @reduxjs/toolkit
//npm i react-redux

import React from 'react';
import './App.css';

import Login from './components/login';
// import NavBar from './components/navbar';
function App() {
  return (
    <div className='cuadro'>
      <Login/>
      {/* <NavBar/> */}
    </div>
  )
}

export default App;
