import React, { createContext } from "react";

const contexto = createContext();

const Context = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const data = {
    showModal,
    setShowModal,
  };

  return <contexto.Provider value={data}>{children}</contexto.Provider>;
};

export default Context;
