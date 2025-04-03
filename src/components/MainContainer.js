import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.popular);
  if (!movies) return;

  const mainMovie = movies[0];
  const {Title, Plot, imdbID} = mainMovie
  return (
    <div>
      <VideoTitle title={Title} overview={Plot}/>
      <VideoBackground movieId={imdbID} title={Title}/>
    </div>
  );
};

export default MainContainer;
