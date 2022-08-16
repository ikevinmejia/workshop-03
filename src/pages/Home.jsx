import React from "react";
import HomeCard from "../components/HomeCard";
import HomeHeader from "../components/HomeHeader";
import NavBar from "../components/NavBar";
import SliderHome from "../components/SliderHome";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <SliderHome />
      <main className="flex flex-col items-center justify-between max-w-lg gap-5 p-2 mx-auto ">
        <div className="flex flex-col w-full gap-3">
          <h2 className="text-greyColor">Recently viewed</h2>
          <div className="flex flex-wrap items-center justify-center w-full gap-2">
            <HomeCard />
            <HomeCard />
          </div>
        </div>
        <div className="flex flex-col w-full gap-3">
          <h2 className="text-greyColor">Recomended</h2>
          <div className="flex flex-wrap items-center justify-center w-full gap-2">
            <HomeCard />
            <HomeCard />
          </div>
        </div>
      </main>
      <NavBar />
    </div>
  );
};

export default Home;
