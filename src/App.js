//npm install react-router-dom
//npm install axios
//npm install @reduxjs/toolkit
//npm i react-redux

import React, { Fragment } from 'react';
import './App.css';

// import Login from './components/login';
// import NavBar from './components/navbar';
import MainRoutes from './routes/mainRoutes';
function App() {
  return (
      <div className='cuadro'>
      <MainRoutes/>
      {/* <Login/> */}
      {/* <NavBar/> */}
    </div>

  )
}

export default App;
