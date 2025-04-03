import React, { useRef } from "react";
import language from "../utils/language-constants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import genAI from "../utils/openai";
import { OMDB_API_KEY } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //Turn this into hooks
  const handleSearchResults = async (movie) => {
    try {
      const data = await fetch(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${movie}`
      );
      const json = await data.json();

      return json;
    } catch (error) {
      console.log(error);
    }
  };
  const handleGptSearchClick = async () => {
    //Make an API call to Openai and get the movie results

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Interstellar, Deadpool, The Dark Knight, Inception, Batman";
    const response = await genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: gptQuery,
    });

    if (!response) {
      // TODO: Error Handling
    }
    console.log(response.text);

    const searchResult = response?.text.split(",");
    console.log(searchResult);

    const data = searchResult.map((movie) => handleSearchResults(movie));

    const omdbResults = await Promise.all(data);
    // const tmdbResults = await handleSearchResults(searchResult[0]);
    console.log(omdbResults);

    dispatch(
      addGptMovieResult({ movieResults: omdbResults, movieNames: searchResult })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg m-4"
          onClick={handleGptSearchClick}
        >
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
