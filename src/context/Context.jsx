import React, { createContext, useState } from "react";

const Contexto = createContext();

const Context = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const data = {
    showModal,
    setShowModal,
  };

  return <Contexto.Provider value={data}>{children}</Contexto.Provider>;
};

export { Contexto, Context };
