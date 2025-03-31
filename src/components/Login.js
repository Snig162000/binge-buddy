import React from "react";
import Header from "./Header";
import { useState, useRef} from "react";
import { validateEmailPassword } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSign] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const emailInfo = useRef(null);
  const passwordInfo = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const signInToggle = () => {
    setIsSign(!isSignIn);
  };

  const validateData = () => {
    //Validate the form data
    const message = validateEmailPassword(
      emailInfo.current.value,
      passwordInfo.current.value
    );
    console.log(message);
    setErrMessage(message);

    if (message) return;

    if (!isSignIn) {
      // Sign up
      createUserWithEmailAndPassword(
        auth,
        emailInfo.current.value,
        passwordInfo.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            const {uid, email, displayName} = auth.currentUser;
            dispatch(
              addUser({ uid: uid, email: email, displayName: displayName })
            )
          }).catch((error) => {
            setErrMessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign in
      signInWithEmailAndPassword(
        auth,
        emailInfo.current.value,
        passwordInfo.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
    //Sign In/ Sign up
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web_tall_panel/IN-en-20250324-TRIFECTA-perspective_69cb00d3-7b5e-45e8-b378-7757f9c8f60b_small.jpg"
          alt="login-bg"
        />
      </div>
      <div className="bg-black p-14 absolute w-4/12 my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <form onClick={(e) => e.preventDefault()}>
          <h1 className="font-bold text-3xl py-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              className="my-2 p-3 w-full bg-gray-800"
              placeholder="Full Name"
            />
          )}
          <input
            ref={emailInfo}
            className="my-2 p-3 w-full bg-gray-800"
            placeholder="Email Address"
          />
          <input
            ref={passwordInfo}
            className="my-2 p-3 w-full bg-gray-800"
            type="password"
            placeholder="Password"
          />
          <p className="text-red-700 text-lg">{errMessage}</p>
          <button
            onClick={validateData}
            className="p-3 my-4 bg-red-700 w-full rounded-lg"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={signInToggle} className="cursor-pointer">
            {isSignIn
              ? "New to Netflix? Sign Up Now"
              : "Already registered. Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
