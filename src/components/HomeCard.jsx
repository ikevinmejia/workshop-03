import React from "react";
import { GoLocation } from "react-icons/go";

const HomeCard = () => {
  return (
    <div className="overflow-hidden transition-shadow duration-300 border-transparent h-44 w-44 rounded-xl bg-secondary hover:shadow-md">
      <figure className="w-full">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg"
          alt="imgcard"
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="flex flex-col w-full gap-1 px-1 h-max text-greyColor">
        <h2 className="mt-2 text-sm font-medium">$ 24</h2>
        <div className="flex items-center justify-between">
          <p className="text-xs font-light">lorem ipsum agrdes</p>
          <div className="flex gap-1">
            <GoLocation size="12" color="#797979" />
            <p className="text-xs font-light">1.7 km</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
