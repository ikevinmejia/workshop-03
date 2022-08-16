import { doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { BiBookmark, BiMap } from "react-icons/bi";
import { db } from "../Firebase/firebaseConfig";

const Descripcion = () => {
  const mela = localStorage.getItem("idImg");
  const [chupa, setChupa] = useState();
  const [imgs, setImg] = useState();
  const [titulos, setTitulos] = useState();
  const [precio, setPrecio] = useState();
  const [kms, setKms] = useState();

  useEffect(() => {
    pantalon();
  }, []);

  const pantalon = async () => {
    const productoid = await getDoc(doc(db, "products", mela));
    setChupa(productoid.data());
    if (chupa !== null) {
      setImg(chupa.img);
      setTitulos(chupa.name);
      setPrecio(chupa.price);
      setKms(chupa.km);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <img className="h-52 w-full max-w-md" src={imgs} alt="icon" />
        <div className="flex h-5 w-full justify-center gap-2">
          <div className="h-2 w-10 rounded-full bg-primary md:h-4 md:w-16"></div>
          <div className="h-2 w-2 rounded-full bg-primary md:h-4 md:w-4"></div>
          <div className="h-2 w-2 rounded-full bg-primary md:h-4 md:w-4"></div>
          <div className="h-2 w-2 rounded-full bg-primary md:h-4 md:w-4"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex max-w-md items-center justify-between px-5 md:mx-auto md:gap-10 ">
          <h1>{titulos}</h1>
          <BiBookmark size={20} />
        </div>
        <div className="flex px-5 md:justify-center">
          <p>{precio} $</p>
        </div>
        <div className="mt-5 flex justify-evenly text-[#474747]">
          <button className="h-8 w-2/5 max-w-xs rounded-3xl border-2 border-primary text-center">
            Call
          </button>
          <button className="h-8 w-2/5 max-w-xs rounded-3xl bg-primary text-center">
            Send SMS
          </button>
        </div>
        <div className="mt-5 flex max-w-md flex-col items-center justify-center gap-5 px-5 text-[#474747] md:mx-auto">
          <h1>Description</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
            lectus quam id leo in vitae turpis. In nulla posuere sollicitudin
            aliquam ultrices. Purus faucibus ornare suspendisse sed. In iaculis
            nunc sed augue. Elementum sagittis vitae et leo duis ut diam quam
            nulla. Facilisi morbi tempus iaculis urna id volutpat. Congue eu
            consequat ac felis donec et odio. Pretium vulputate sapien nec
            sagittis aliquam malesuada bibendum. Amet aliquam id diam maecenas.
            Velit aliquet sagittis id consectetur purus ut faucibus.
          </p>
        </div>
      </div>
      <div className="mt-5 flex items-center px-5 text-[#474747] md:justify-center">
        <BiMap size={40} />
        <h1>Denver, Colorado USA</h1>
      </div>
      <div className="flex items-center px-5 text-sm text-[#474747] md:justify-center">
        <p>{kms} kilometers from you</p>
      </div>
      <div className="mt-5 flex items-center px-5 text-[#474747] md:justify-center">
        <p>Similar ads</p>
        {/* Targeticas aqui */}
      </div>
    </div>
  );
};

export default Descripcion;
