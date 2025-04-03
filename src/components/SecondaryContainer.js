import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { MOVIES_CATEGORIES } from "../utils/constants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
    <div className="mt-0 md:-mt-24 relative z-20 pl-4 md:pl-16">
      <MovieList title={"Trending"} movies={movies.trending} />
      <MovieList title={"Popular"} movies={movies.popular} />
      <MovieList title={"Favorited"} movies={movies.favorited} />
      <MovieList title={"Most Watched"} movies={movies.mostWatched} />
      {/* 
        MovieList: Popular
          MovieCards * n
        MovieList: Now Playing
        MovieList: Trending
        MovieList: Horror
      */}
      </div>
    </div>
  );
};

export default SecondaryContainer;
