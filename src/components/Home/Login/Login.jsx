import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from "react-router";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../../App";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const LogIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [userInfo, setUserInfo] = useState({
    isSignIn: false,
    username: "",
    email: "",
    photo: "",
  });
  const handleGoogleSignIn = () => {
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(GoogleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const userSignIn = {
          username: displayName,
          photo: photoURL,
          email: email,
          isSignIn: true,
        };
        stocklocalStorage(userSignIn.email, userSignIn.username, userSignIn.photo)
        setUserInfo(userSignIn);
        setLoggedInUser(userSignIn);
        storeAuthToken();
        history.replace(from);
        // console.log(userSignIn.username);
      })
      .catch((error) => {
        console.log("Login Error", error.message);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  const stocklocalStorage = (userEmail, userName) => {
    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("userName",userName);
  };


  return (
    <div className="container text-center pb-5 mb-5">
      <div className="single-card">
        <div className="face face2">
          <div className="content">
            <button
              style={{ width: "48%", paddingTop: "5px", paddingBottom: "5px" }}
              className="submitBtn"
              onClick={handleGoogleSignIn}
            >
              <img
                src="http://pngimg.com/uploads/google/google_PNG19630.png"
                width="30px"
                alt=".."
              />{" "}
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="single-card">
        <div className="face face2">
          <div className="content">
            <button
              style={{ width: "48%", paddingTop: "5px", paddingBottom: "5px" }}
              className="submitBtn"
            >
              <img
                src="https://freepngimg.com/thumb/facebook/24751-6-facebook-logo-file.png"
                width="30px"
                alt=".."
              />{" "}
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
