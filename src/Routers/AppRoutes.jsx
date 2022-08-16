import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduce from "../components/Introduce";
import Home from "../pages/Home";
import Descripcion from "../pages/Descripcion";
import EditProfile from "../pages/EditProfile";
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
                title={"Sell"}
                text={
                  "List your items for sale and see how fast they get bought"
                }
                textButton={"Next"}
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
                title={"Buy"}
                text={
                  "See and choose products suitable products or products that are nearby"
                }
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
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/Descripcion" element={<Descripcion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
