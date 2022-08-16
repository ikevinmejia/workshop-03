import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function LinkButton({ text, goTo }) {
  return (
    <Link to={goTo} className="w-full text-center ">
      <Button text={text}></Button>
    </Link>
  );
}

export default LinkButton;
