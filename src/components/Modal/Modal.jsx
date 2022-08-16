import React from "react";
import { createPortal } from "react-dom";
function Modal({ children }) {
  return createPortal(
    <div className="fixed -left-[10px] -right-[10px] -bottom-[10px] -top-[10px] flex items-center justify-center bg-[rgba(32,35,41,.8)]">
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
