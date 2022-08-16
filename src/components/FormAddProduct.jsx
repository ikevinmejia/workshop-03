import React, { useContext, useState } from "react";
import { Context } from "../context/ContextProvider";
import { useForm } from "../Hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { actionNewWorkout } from "../Redux/Actions/actionNewWorkout";
import {
  doc,
  setDoc,
  collection,
  updateDoc,
  getDoc,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";
import { useEffect } from "react";

function FormAddWorkout() {
  const dispatch = useDispatch();
  const [imgWorkout, setImgWorkout] = useState("");
  const [arreglo, setArreglo] = useState("");
  const { handleModal } = useContext(Context);
  const dataReduxUser = useSelector((state) => state.login);

  const { formValue, handleInputChangeName, reset } = useForm({
    kindWorkout: "",
    titleWorkout: "",
    time: "",
    description: "",
  });

  let widget_cloudinary = cloudinary.createUploadWidget(
    {
      cloudName: "dzsd7vfjr",
      uploadPreset: "Workouts",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        let urlImgCloudinary = result.info.secure_url;
        setImgWorkout(urlImgCloudinary);
      }
    }
  );

  const data = async () => {
    const datos = await getDocs(collection(db, "users"));
    const perra = datos.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    for (let i = 0; i < perra.length; i++) {
      if (perra[i].uid == dataReduxUser.uid) {
        setArreglo(perra[i]);
      }
    }
  };

  useEffect(() => {
    data();
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    formValue.file = imgWorkout;
    dispatch(actionNewWorkout(formValue));
    const user = doc(db, "users", dataReduxUser.uid);
    let workouts = [];
    if (arreglo.workouts === null) {
      workouts.push(formValue);
    } else {
      workouts = arreglo.workouts;
      workouts.push(formValue);
    }

    await updateDoc(user, { workouts: workouts });
    reset();
    handleModal();
  };

  const handleCloudinary = () => {
    widget_cloudinary.open(), false;
  };

  return (
    <>
      {/* <!-- Main modal --> */}
      <div
        tabIndex="-1"
        className={
          "h-modal fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
        }
        aria-modal="true"
        role="dialog"
      >
        <div className="relative w-full h-full max-w-md p-4 md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={handleModal}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Create new workout
              </h3>
              <form className="space-y-6" onSubmit={(e) => handleOnSubmit(e)}>
                <div>
                  <label
                    htmlFor="kindWorkout"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Muscle to work
                  </label>
                  <input
                    type="text"
                    name="kindWorkout"
                    id="kindWorkout"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-secondary outline-none focus:border-primary"
                    placeholder="triceps, back..."
                    onChange={handleInputChangeName}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="titleWorkout"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Title of workout
                  </label>
                  <input
                    type="text"
                    name="titleWorkout"
                    id="titleWorkout"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-secondary outline-none focus:border-primary"
                    placeholder="Up and down workout"
                    onChange={handleInputChangeName}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Duration
                  </label>
                  <input
                    type="number"
                    name="time"
                    id="time"
                    placeholder="23 min"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-secondary outline-none focus:border-primary"
                    onChange={handleInputChangeName}
                    required
                  />
                </div>
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    htmlFor="files"
                  >
                    Upload file
                  </label>
                  <input
                    className="block w-full h-8 text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 text-secondary file:mr-4 file:cursor-pointer file:border-0 file:bg-mainBgColor file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-gray-700 focus:outline-none"
                    id="files"
                    type="button"
                    name="file"
                    value="Seleccionar archivo"
                    onClick={() => handleCloudinary()}
                    onChange={handleInputChangeName}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Description
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-secondary outline-none focus:border-primary "
                    placeholder="Short description"
                    name="description"
                    onChange={handleInputChangeName}
                  ></textarea>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start"></div>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg border border-secondary bg-transparent px-5 py-2.5 text-center text-sm font-medium text-mainBgColor transition-colors duration-500 hover:bg-mainBgColor hover:text-white focus:outline-none"
                >
                  Add new workout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormAddWorkout;
