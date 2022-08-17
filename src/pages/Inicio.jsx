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
          <figure className="flex flex-col items-center justify-center">
            <img src={logo} />
            <figcaption className="text-4xl text-center text-greyColor">
              BulletinBoard
            </figcaption>
          </figure>
        </>
      ) : (
        <Introduce
          title={"Choose"}
          text={"Choose products available add to favorites and then buy"}
          textButton={"Next"}
          goTo="/b2"
          img={
            "https://res.cloudinary.com/ikevinmejia/image/upload/v1660695064/Svg_tlstr9.png"
          }
        />
      )}
    </div>
  );
}
export default Inicio;
