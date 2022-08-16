import React from "react";

function Button({ text, event, type }) {
  return (
    <button
      className="w-40 h-10 max-w-sm transition-all duration-700 border rounded-3xl text-greyColor hover:w-full hover:border-transparent hover:bg-primary"
      onClick={event}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
