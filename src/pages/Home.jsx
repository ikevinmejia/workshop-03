import React, { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";
import HomeHeader from "../components/HomeHeader";
import NavBar from "../components/NavBar";
import SliderHome from "../components/SliderHome";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { db } from "../Firebase/firebaseConfig";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

const Home = () => {
  const dispatch = useDispatch();
  const [prueba, setPrueba] = useState([]);
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
    calzon();
  }, []);

  const calzon = async () => {
    const products = await getDocs(collection(db, "products"));

    products.forEach((doc) => {
      if (prueba.length < 1) {
        setPrueba((prev) => [...prev, doc.data()]);
      }
    });
  };

  return (
    <div>
      <HomeHeader />
      <SliderHome />
      <main className="mx-auto flex max-w-lg flex-col items-center justify-between gap-5 p-2 ">
        <div className="flex w-full flex-col gap-3">
          <h2 className="text-greyColor">Recently viewed</h2>
          <div className="flex w-full flex-wrap items-center justify-center gap-2">
            <HomeCard />
          </div>
        </div>
        <div className="flex w-full flex-col gap-3">
          <h2 className="text-greyColor">Recomended</h2>
          <div className="flex w-full flex-wrap items-center justify-center gap-10">
            {prueba &&
              prueba.map(({ img, price, name, km }, idx) => (
                <HomeCard
                  key={idx}
                  img={img}
                  price={price}
                  titulo={name}
                  km={km}
                />
              ))}
          </div>
        </div>
      </main>
      <NavBar />

      {/* {<SideBar></SideBar>} */}
    </div>
  );
};

export default Home;
