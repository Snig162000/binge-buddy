import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useTrendingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import { MOVIES_CATEGORIES } from "../utils/constants";
import useTrending from "../hooks/useTrendingMovies";
import useMostWatchedMovies from "../hooks/useMostWatchedMovies";
import usePopular from "../hooks/usePopularMovies";
import useFavoritedMovies from "../hooks/useFavoritedMovies";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useTrending();
  useMostWatchedMovies();
  useFavoritedMovies();
  usePopular();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {/* 
        Main container
          - video background
          - video title
        Secondary container
          - movie list * n
          - card * n
      */}
    </div>
    // <h1>Browse</h1>
  );
};

export default Browse;
