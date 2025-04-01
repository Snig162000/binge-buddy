import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
    <div className="-mt-24 relative z-20 pl-16">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
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
