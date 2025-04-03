import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, OMDB_API_KEY } from "../utils/constants";
import { addTrending} from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrending = () => {
  const dispatch = useDispatch();

  const trendingMovies = useSelector(store => store.movies.trending);
  
  const getNowPlayingMovies = async () => {
    const result = await fetch(
      `https://api.trakt.tv/movies/trending`,
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
    dispatch(addTrending(moviesWithPosters));
  };

  useEffect(() => {
    !trendingMovies && getNowPlayingMovies();
  }, []);
};

export default useTrending;
