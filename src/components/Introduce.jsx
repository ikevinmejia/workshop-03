import React from "react";
import LinkButton from "./LinkButton";

function Introduce({ title, text, textButton, goTo, imgMobile, imgLarge }) {
  return (
    <>
      <div
        className={`mx-auto flex h-screen w-full flex-col items-center justify-end  bg-mainBgColor ${imgMobile} bg-cover bg-center bg-no-repeat md:flex-row md:justify-start ${imgLarge}`}
      >
        <div className="flex flex-col justify-around w-11/12 gap-3 text-center h-1/3 md:ml-3 md:h-2/4 md:w-1/2 md:justify-center md:gap-8 ">
          <div>
            <h1 className="text-base font-semibold text-white">{title}</h1>
            <p className="text-sm font-light text-white">{text}</p>
          </div>
          <div>
            <LinkButton text={textButton} goTo={goTo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduce;
