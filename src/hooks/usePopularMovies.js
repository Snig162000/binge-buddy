import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, OMDB_API_KEY } from "../utils/constants";
import { addPopular } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopular = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector(store => store.movies.popular);
  
  const getNowPlayingMovies = async () => {
    const result = await fetch(
      `https://api.trakt.tv/movies/popular`,
      API_OPTIONS
    );
    const json = await result.json();

    const moviesWithPosters = await Promise.all(
      json.map(async (movie) => {
        const poster = await fetch(
          `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${movie?.ids.imdb}`
        );

        const posterJson = await poster.json();
        return posterJson;
      })
    );
    dispatch(addPopular(moviesWithPosters));
  };

  useEffect(() => {
    !popularMovies && getNowPlayingMovies();
  }, []);
};

export default usePopular;
