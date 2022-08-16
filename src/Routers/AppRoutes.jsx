import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduce from "../components/Introduce";
import EditProfile from "../pages/EditProfile";
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
              title={"Discipline"}
              text={"Develop discipline in yourself train every day"}
              textButton={"Next"}
              imgMobile={"bg-b2"}
              imgLarge={"md:bg-b2f"}
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
              title={"Character"}
              text={"Cultivate in you an iron character for training"}
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
        <Route path="/EditProfile" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
