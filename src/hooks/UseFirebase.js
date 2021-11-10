import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import Alert from "./Alert";

initializeAuthentication();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [primaryAvatar, setPrimaryAvatar] = useState("");
  const { sweetAlert } = Alert();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        sweetAlert("success", "Success", "Logged Out SuccessFully", false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        sweetAlert("error", "OOPS!", `Error ${errorCode}! ${errorMessage}`);
        console.log(`OOPS! Error ${errorCode}! ${errorMessage}`);
      })
      .finally(() => setLoading(false));
  };
  const emailSignin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    // .then((userCredential) => {
    //   // Signed in
    //   const user = userCredential.user;
    //   sweetAlert("success", "Success", "Logged In SuccessFully", false);
    //   setUser(user);
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   sweetAlert("error", "OOPS!", `Error ${errorCode}! ${errorMessage}`);
    // });
  };
  const signup = async (name, email, password, avatar) => {
    setPrimaryAvatar(avatar);
    return createUserWithEmailAndPassword(auth, email, password);
    // .then((userCredential) => {
    //   updateProfile(auth.currentUser, {
    //     displayName: name,
    //     photoURL: avatar || "https://i.ibb.co/qgbdqZ3/male.png",
    //   }).then(() => {
    //     setUser(userCredential.user);
    //   });
    //   sweetAlert("success", "Success", "Signed Up Successfully!", false);
    // })
    // .catch((error) => {
    //   const errorMessage = error.message;
    //   sweetAlert("error", "OOPS!", errorMessage, false);
    // });
  };

  return {
    user,
    loading,
    setLoading,
    primaryAvatar,
    signInWithGoogle,
    logOut,
    signup,
    emailSignin,
    setUser,
  };
};

export default UseFirebase;
