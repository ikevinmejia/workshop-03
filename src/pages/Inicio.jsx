import React, { useEffect, useState } from "react";
import logo from "../img/Logo.png";
import Introduce from "../components/Introduce";

function Inicio() {
  const [inicio, setInicio] = useState(false);

  useEffect(() => {
    setInicio(true);
    setTimeout(() => {
      setInicio(false);
    }, 1500);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen mx-auto max-w-14">
      {inicio ? (
        <>
          <figure>
            <img src={logo} />
            <figcaption className="text-4xl text-center text-white">
              Buffalo
            </figcaption>
          </figure>
        </>
      ) : (
        <Introduce
          title={"Workout"}
          text={"Start training with usand build muscle or lose weight"}
          textButton={"Next"}
          imgMobile={"bg-b1"}
          imgLarge={"md:bg-b1f"}
          goTo="/b2"
        />
      )}
    </div>
  );
}
export default Inicio;
