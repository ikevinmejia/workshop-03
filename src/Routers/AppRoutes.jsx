import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduce from "../components/Introduce";
import Home from "../pages/Home";
import Inicio from "../pages/Inicio";
import { Login } from "../pages/Login";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

function AppRoutes() {

  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const auth2 = getAuth();
    onAuthStateChanged(auth2, (user) => {
      if (user?.uid) {
        // console.log(user);
        // Posibilidad de recuperar la info luego de que se recargue la web
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  }, [auth]);


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRouter isAutentication={auth}>
              <Inicio />
            </PublicRouter>
          }
        />
        <Route
          path="/b2"
          element={
            <PublicRouter isAutentication={auth}>
              <Introduce
                title={"Discipline"}
                text={"Develop discipline in yourself train every day"}
                textButton={"Next"}
                imgMobile={"bg-b2"}
                imgLarge={"md:bg-b2f"}
                goTo="/b3"
              />
            </PublicRouter>
          }
        />
        <Route
          path="/b3"
          element={
            <PublicRouter isAutentication={auth}>
              <Introduce
                title={"Character"}
                text={"Cultivate in you an iron character for training"}
                textButton={"Registration"}
                imgMobile={"bg-b3"}
                imgLarge={"md:bg-b3f"}
                goTo="/login"
              />
            </PublicRouter>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRouter isAutentication={auth}>
              <Login />
            </PublicRouter>
          }
        />

        <Route
          path="/home"
          element={
            <PrivateRouter isAutentication={auth}>
              <Home />
            </PrivateRouter>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
