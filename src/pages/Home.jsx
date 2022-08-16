import React, { useEffect } from "react";
import HomeCard from "../components/HomeCard";
import HomeHeader from "../components/HomeHeader";
import NavBar from "../components/NavBar";
import SliderHome from "../components/SliderHome";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { db } from "../Firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const Home = () => {
  const dispatch = useDispatch();
  const dataReduxUser = useSelector((state) => state.login);
  console.log(dataReduxUser);
  const dataUser = async () => {
    const data = {
      displayName: dataReduxUser.displayName,
      email: dataReduxUser.email,
      photoURL: dataReduxUser.photoURL,
      uid: dataReduxUser.uid,
      phone: 3112429428,
      location:
        "Me la tiene es que mamar en reversa si quiere saber donde vivo",
    };
    await setDoc(doc(db, "users", dataReduxUser.uid), data);
  };

  useEffect(() => {
    dataUser();
  }, []);

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

      {/* {<SideBar></SideBar>} */}
    </div>
  );
};

export default Home;
