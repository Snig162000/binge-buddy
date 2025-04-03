import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, OMDB_API_KEY } from "../utils/constants";
import { addMostWatched} from "../utils/moviesSlice";
import { useEffect } from "react";

const useMostWatchedMovies = () => {
  const dispatch = useDispatch();

  const mostWatchedMovies = useSelector(store => store.movies.mostWatched);
  
  const getNowPlayingMovies = async () => {
    const result = await fetch(
      `https://api.trakt.tv/movies/watched/weekly`,
      API_OPTIONS
    );
    const json = await result.json();

    const moviesWithPosters = await Promise.all(
      json.map(async (movie) => {
        const poster = await fetch(
          `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${movie?.movie?.ids.imdb}`
        );

        const posterJson = await poster.json();
        return posterJson;
      })
    );
    dispatch(addMostWatched(moviesWithPosters));
  };

  useEffect(() => {
    !mostWatchedMovies && getNowPlayingMovies();
  }, []);
};

export default useMostWatchedMovies;
