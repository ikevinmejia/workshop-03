import { userTypes } from "../Types/userTypes";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { google } from "../../Firebase/firebaseConfig";

export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user: { displayName, email, photoURL, uid } }) =>
        dispatch(loginProvider(displayName, email, photoURL, uid))
      )
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
};

const loginProvider = (displayName, email, photoURL, uid) => {
  return {
    type: userTypes.login,
    payload: {
      displayName,
      email,
      photoURL,
      uid,
    },
  };
};
