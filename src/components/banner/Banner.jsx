import React, { useState } from "react";

import { BannerItem } from "./BannerItem";
const Banner = ({ movie }) => {
  return (
    <div id="demo" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {movie.map((movie, i) => (
          // <MovieItem key={movie.id} movie={movie}/>

          <BannerItem key={movie.id} movie={movie} indicador={i} />
        ))}
      </div>
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  );
};

export default Banner;
