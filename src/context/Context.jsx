import React, { createContext, useState } from "react";

const Contexto = createContext();

const Context = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSider, setShowSider] = useState(false);

  const handleSider = () => {
    setShowSider(!showSider);
  };

  const data = {
    showModal,
    setShowModal,
    handleSider,
    showSider,
  };

  return <Contexto.Provider value={data}>{children}</Contexto.Provider>;
};

export { Context, Contexto };
