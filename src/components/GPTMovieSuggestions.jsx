import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {
  const {movieNames, movieResults} = useSelector(store => store.gpt);
  if(!movieNames) return null;

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-80 rounded-lg w-[50%] mx-auto'>
      <div>
        {movieNames.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  )
}

export default GPTMovieSuggestions