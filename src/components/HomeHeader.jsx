import React, { useContext } from "react";
import { Avatar } from "flowbite-react";
import { IoNotificationsOutline } from "react-icons/io5";
// import { Context } from "../context/ContextProvider";
// import { useSelector } from "react-redux";

function HomeHeader() {
  //   const { handleSider } = useContext(Context);
  //   const { photoURL, displayName } = useSelector((state) => state.login);

  return (
    <div className="flex items-center justify-between max-w-lg p-2 mx-auto ">
      <div
        className="flex gap-3 transition-all duration-700 cursor-pointer "
        // onClick={handleSider}
      >
        <Avatar
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded
        />
        <h1 className="font-normal text-greyColor">
          Hi!
          <br /> 'Ralph Edwards'
        </h1>
      </div>
      <IoNotificationsOutline color="#5d5e5e" size="25" />
    </div>
  );
}

export default HomeHeader;
