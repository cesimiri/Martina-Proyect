import Login from "../components/login"
import { Routes, Route} from "react-router-dom";
import NavBar from "../components/navbar";
import React, { Fragment } from "react";
import NuevoUsuario from "../components/nuevoUsuario";
import { useSelector } from "react-redux";

const MainRoutes = () => {
  const {isLogin} = useSelector(state=> state.login)

  return (
    <Routes>

      {
        isLogin ? (
          <Fragment>
            <Route path='*' element={<NavBar />} />
          </Fragment>
        ) : (
          <Fragment>
            <Route path='/nuevoUsuario' element={<NuevoUsuario />} />
            <Route path='/' element={<Login />} />
          </Fragment>
        )
      }

      

    </Routes>
  )


}

export default MainRoutes 