import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import {
  NETFLIX_LOGO,
  SIGNED_IN_USER,
  SUPPORTED_LANG,
} from "../utils/constants";
import { toggleGptSearchValue } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // @ts-ignore
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const showGPTSearch = useSelector((store) => store?.gpt.showGptSearch);

  // handling all the dispatch functionalities from the root of the application
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchValue());
  };
  return (
    <div className="px-16 pt-2 absolute z-10 bg-gradient-to-b from-black w-full flex justify-between">
      <img className="w-40" src={NETFLIX_LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex p-2">
          {showGPTSearch && (
            <select
              className="p-2 bg-gray-900 text-white m-2"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-purple-800 text-white px-4 py-2 rounded-lg mx-4 my-2"
            onClick={handleGptSearchClick}
          >
            {showGPTSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 mr-2"
            src={SIGNED_IN_USER}
            alt="signed-img"
          />
          <button className="text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
