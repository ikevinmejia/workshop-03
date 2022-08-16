import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";
import SideBar from '../components/SideBar';

const Home = () => {

    const dispatch = useDispatch();
    const dataReduxUser = useSelector((state) => state.login);
    console.log(dataReduxUser)
    const dataUser = async () => {
        const data = {
            displayName: dataReduxUser.displayName,
            email: dataReduxUser.email,
            photoURL: dataReduxUser.photoURL,
            uid: dataReduxUser.uid,
            phone: 3112429428,
            location: "Me la tiene es que mamar en reversa si quiere saber donde vivo"
        }
        await setDoc(doc(db, "users", dataReduxUser.uid), data);
    }

    useEffect(() => {
        dataUser()

    }, [])



    return (
        <div>
            home
            <SideBar></SideBar>

        </div>
    )
}

export default Home