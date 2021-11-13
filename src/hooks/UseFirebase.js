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
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [primaryAvatar, setPrimaryAvatar] = useState("");
  const [primaryName, setPrimaryName] = useState("");
  const [loadAdmin, setLoadAdmin] = useState(true);
  const [checkAdmin, setCheckAdmin] = useState(false);
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

  useEffect(() => {
    setLoadAdmin(true);
    fetch(`https://mysterious-falls-17889.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data.admin);
        setCheckAdmin(false);
        setLoadAdmin(false);
      });
  }, [user.email, checkAdmin]);

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
    setPrimaryName(name);
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
  const saveUser = (email, displayName, avatar, method) => {
    const user = {
      email: email,
      displayName: displayName,
      role: "user",
      avatar: avatar,
    };
    fetch("https://mysterious-falls-17889.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return {
    user,
    isAdmin,
    loading,
    loadAdmin,
    setLoading,
    primaryAvatar,
    primaryName,
    signInWithGoogle,
    logOut,
    signup,
    emailSignin,
    setUser,
    saveUser,
  };
};

export default UseFirebase;
