import React, { useContext, useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";
import HomeHeader from "../components/HomeHeader";
import NavBar from "../components/NavBar";
import SliderHome from "../components/SliderHome";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../Firebase/firebaseConfig";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import SideBar from "../components/SideBar";
import { Contexto } from "../context/Context";


const Home = () => {
    const { showSider, handleSider } = useContext(Contexto);
    const dispatch = useDispatch();
    const [prueba, setPrueba] = useState([]);
    const dataReduxUser = useSelector((state) => state.login);
    const navigate = useNavigate()

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

    const handleNavigate = ({ target }) => {
        navigate("/Descripcion")
        localStorage.setItem('idImg', target.id)
    }

    return (
        <div>
            <div
                onClick={showSider ? handleSider : null}
                className={showSider ? "h-screen blur-md md:blur-none  " : "h-screen"}
            >
                <HomeHeader />
                <SliderHome />
                <main className="flex flex-col items-center justify-between max-w-lg gap-5 p-2 mx-auto ">
                    <div className="flex flex-col w-full gap-3">
                        <h2 className="text-greyColor">Recently viewed</h2>
                        <div className="flex flex-wrap items-center justify-center w-full gap-2">
                            <HomeCard
                                img={
                                    "https://help.apple.com/assets/613FDE81C88FF868634BFD43/613FDE85C88FF868634BFD52/es_419/7d204cd60ff1fce24cf6d11f24cd210a.png"
                                }
                                price={"300"}
                                titulo="Mac"
                                km={"34"}
                            />
                            <HomeCard
                                img={
                                    "https://doctormovil.co/wp-content/uploads/2021/10/iphone-11-todos-lila-e1637895926871.png"
                                }
                                price={"300"}
                                titulo="Iphone"
                                km={"34"}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <h2 className="text-greyColor">Recomended</h2>
                        <div className="flex flex-wrap items-center justify-center w-full gap-2">
                            {prueba &&
                                prueba.map(({ img, price, name, km, id }, idx) => (
                                    <HomeCard
                                        key={idx}
                                        id={id}
                                        img={img}
                                        price={price}
                                        titulo={name}
                                        km={km}
                                        funcion={handleNavigate}
                                    />
                                ))}
                        </div>
                    </div>
                </main>
                <NavBar />
            </div>
            {showSider && <SideBar />}
        </div>
    );
};

export default Home;
