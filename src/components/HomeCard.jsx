import React from "react";
import { GoLocation } from "react-icons/go";

const HomeCard = ({ img, price, titulo, km }) => {
  return (
    <div className="overflow-hidden transition-shadow duration-300 border-transparent h-44 w-44 rounded-xl bg-secondary hover:shadow-md">
      <figure className="w-full h-28">
        <img src={img} alt="imgcard" className="object-cover w-full h-full" />
      </figure>
      <div className="flex flex-col w-full gap-1 px-1 h-max text-greyColor">
        <h2 className="mt-2 text-sm font-medium">{`$ ${price}`}</h2>
        <div className="flex items-center justify-between">
          <p className="text-xs font-light">{titulo}</p>
          <div className="flex gap-1">
            <GoLocation size="12" color="#797979" />
            <p className="text-xs font-light">{`${km} km`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
