import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginGoogle } from '../Redux/actions/userActions';


export const Login = () => {

    const dispatch = useDispatch();
    const dataReduxUser = useSelector((state) => state.login);

    const handleGoogle = () => {
        dispatch(loginGoogle());
    }

    return (
        <div className="container relative flex flex-col items-center h-screen max-w-4xl mx-auto mt-40">
            <div className="flex items-center justify-center">
                <img
                    className="md:h-52 md:w-52"
                    src={require("../img/logo.png")}
                    alt="logo"
                />
            </div>



            <div className="flex flex-col items-center w-7/12 mt-24 md:mt-10">
                <p className="text-lg font-light text-black md:text-base ">
                    Sing In with
                </p>
                <div className="flex items-center justify-center w-full mt-4 ">
                    <div className="flex items-center justify-center w-2/4 w-41 ">
                        <img
                            src={require("../img/google.png")}
                            alt=""
                            className="mr-2 cursor-pointer md:w-8"
                            onClick={handleGoogle}
                        />
                    </div>

                </div>
            </div>


        </div>
    )
}
