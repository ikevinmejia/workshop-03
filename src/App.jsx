import React from "react";
import AppRoutes from "./Routers/AppRoutes";
import { useSelector } from 'react-redux';

function App() {

  const datosLogin = useSelector((state) => state.login);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
