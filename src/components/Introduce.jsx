import React from "react";
import LinkButton from "./LinkButton";

function Introduce({ title, text, textButton, goTo, img }) {
  return (
    <>
      <div
        className={`mx-auto flex h-screen w-full flex-col items-center  justify-center  bg-mainBgColor bg-cover bg-center bg-no-repeat `}
      >
        <div className="flex flex-col items-center justify-around w-11/12 gap-12 text-center h-1/3 ">
          <div className="flex flex-col gap-3">
            <img src={img} alt="" />
            <h1 className="text-base font-semibold text-greyColor">{title}</h1>
            <p className="text-sm font-light text-greyColor">{text}</p>
          </div>
          <div className="w-full">
            <LinkButton text={textButton} goTo={goTo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduce;
