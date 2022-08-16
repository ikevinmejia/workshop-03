import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduce from "../components/Introduce";
import Inicio from "../pages/Inicio";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            // <PublicRouter isAutentication={auth}>
            <Inicio />
            // </PublicRouter>
          }
        />
        <Route
          path="/b2"
          element={
            // <PublicRouter isAutentication={auth}>
            <Introduce
              title={"Sell"}
              text={"List your items for sale and see how fast they get bought"}
              textButton={"Next"}
              goTo="/b3"
            />
            // </PublicRouter>
          }
        />
        <Route
          path="/b3"
          element={
            // <PublicRouter isAutentication={auth}>
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
            // </PublicRouter>
          }
        />
        {/* <Route
          path="/login"
          element={
            // <PublicRouter isAutentication={auth}>
            <Login />
            // </PublicRouter>
          }
        />
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
