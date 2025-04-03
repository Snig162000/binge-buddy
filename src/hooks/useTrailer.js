import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailer = (title) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector(store => store.movies.trailerVideo);

  const getMoviesVideos = async () => {
    const result = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${title}+trailer&type=video&key=AIzaSyAH52wLEZ9G1f26NnEI1bmGtJiREF9T-uk`,
    );
    const json = await result.json();
    const trailer = json?.items[0]?.id?.videoId;
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMoviesVideos();
  }, []);
};

export default useTrailer;
