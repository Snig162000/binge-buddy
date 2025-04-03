import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, OMDB_API_KEY } from "../utils/constants";
import { addFavorited} from "../utils/moviesSlice";
import { useEffect } from "react";

const useFavoritedMovies = () => {
  const dispatch = useDispatch();

  const favoritedMovies = useSelector(store => store.movies.favorited);

  const getNowPlayingMovies = async () => {
    const result = await fetch(
      `https://api.trakt.tv/movies/favorited/weekly`,
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
    dispatch(addFavorited(moviesWithPosters));
  };

  useEffect(() => {
    //MEMOISATION
    !favoritedMovies && getNowPlayingMovies();
  }, []);
};

export default useFavoritedMovies;
