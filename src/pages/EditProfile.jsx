import React from "react";
import { BiArrowBack, BiEditAlt, BiInfinite } from "react-icons/bi";

const EditProfile = () => {
  return (
    <div className="container mx-auto">
      <div className="relative mt-5 flex w-full justify-center">
        <BiArrowBack
          size={35}
          style={{ position: "absolute", left: "0px", marginLeft: "5px" }}
        />
        <img
          className=" w-16 md:w-24"
          src="https://res.cloudinary.com/dnont3pur/image/upload/v1660679388/Workshop-3/Profile_img_isatel.png"
          alt="profile"
        />
      </div>
      <div className="mt-5 flex flex-col gap-5">
        <div className="mx-auto flex h-10 w-11/12 max-w-md items-center justify-between rounded-2xl bg-primary px-8">
          <input
            type="text"
            className="h-8 bg-transparent text-lg outline-none"
            placeholder="Nuthelk"
          />
          <BiEditAlt size={25} />
        </div>

        <div className="mx-auto flex h-10 w-11/12 max-w-md items-center justify-between rounded-2xl bg-primary px-8">
          <input
            type="email"
            className="h-8 bg-transparent text-lg outline-none"
            placeholder="Elperro@gmail.com"
          />
          <BiEditAlt size={25} />
        </div>

        <div className="mx-auto flex h-10 w-11/12 max-w-md items-center justify-between rounded-2xl bg-primary px-8">
          <input
            type="number"
            className="h-8 bg-transparent text-lg outline-none"
            placeholder="123456789"
          />
          <BiEditAlt size={25} />
        </div>

        <div className="mx-auto flex h-10 w-11/12 max-w-md items-center justify-between rounded-2xl bg-primary px-8">
          <input
            type="text"
            className="h-8 bg-transparent text-lg outline-none"
            placeholder="EnlaPM"
          />
          <BiEditAlt size={25} />
        </div>

        <div className="mx-auto flex h-10 w-11/12 max-w-md items-center justify-between rounded-2xl bg-primary px-8">
          <input
            className="text-lg text-[#797979]"
            type="button"
            value="Notifications"
          />
          <BiInfinite size={25} />
        </div>

        <div className="mx-auto flex h-10 w-11/12 max-w-md items-center justify-between rounded-2xl bg-primary px-8">
          <input
            className="text-lg text-[#797979]"
            type="button"
            value="Payment"
          />
          <BiEditAlt size={25} />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
