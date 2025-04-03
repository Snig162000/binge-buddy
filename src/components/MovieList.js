import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title, movies, "result")
  return (
    <div className="px-6">
      <h1 className="md:text-3xl text-lg py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.length ? movies?.map((movie) => (
            <MovieCard posterPath={movie?.Poster} />
          )) :
          <MovieCard posterPath={movies?.Poster} /> 
          }
        </div>
      </div>
    </div>
  );
};

export default MovieList;
