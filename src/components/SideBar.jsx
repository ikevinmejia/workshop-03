import React from "react";
import { Avatar } from "flowbite-react";
import { FiLogOut } from "react-icons/fi";
import { getAuth } from "firebase/auth";

const SideBar = () => {
  const auth = getAuth();

  return (
    <div className="absolute top-0 z-10 h-screen w-4/5 rounded-tr-[80px] rounded-br-[80px] bg-primary px-5 text-black md:w-1/5">
      <div className="flex items-center justify-between pt-20">
        <div className="flex gap-3">
          <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={true}
          />
          <h1 className="font-medium text-black">
            Hi!
            <br /> Nombre Apellido
          </h1>
        </div>


      </div>

      <div className="flex items-center gap-4 mt-12 font-medium">
        <p>Active ads</p>
      </div>
      <div className="flex items-center gap-4 mt-4 font-medium">

        <p>Inactive ads</p>
      </div>
      <div className="flex items-center gap-4 mt-4 font-medium">

        <p>Payment</p>
      </div>
      <div className="flex items-center gap-4 mt-4 font-medium">

        <p>Terms of use</p>
      </div>
      <div className="flex items-center gap-4 mt-4 font-medium">

        <p>Security policy</p>
      </div>
      <div className="flex items-center gap-4 mt-4 font-medium">

        <p>About Us</p>
      </div>
      <div className="flex items-center gap-4 mt-12 font-bold">
        <button
          onClick={() => {
            auth.signOut();
            localStorage.clear()
          }}
        >
          <FiLogOut color="#000" size={"25"} />
        </button>
        <p>LogOut</p>
      </div>
    </div>
  );
};

export default SideBar;
