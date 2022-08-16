import React, { useContext } from "react";
import { Avatar } from "flowbite-react";
import { IoNotificationsOutline } from "react-icons/io5";

import { useSelector } from "react-redux";
import { Contexto } from "../context/Context";

function HomeHeader() {
  const { handleSider } = useContext(Contexto);
  // const { displayName } = useSelector((state) => state.login);

  return (
    <div className="flex items-center justify-between max-w-lg p-2 mx-auto ">
      <div
        className="flex gap-3 transition-all duration-700 cursor-pointer "
        onClick={handleSider}
      >
        <Avatar
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded
        />
        <h1 className="font-normal text-greyColor">
          Hi!
          {/* <br /> {displayName} */}
          <br /> 'nombre apellido'
        </h1>
      </div>
      <IoNotificationsOutline color="#5d5e5e" size="25" />
    </div>
  );
}

export default HomeHeader;
