import React from "react";
import { NavLink } from "react-router-dom";

export const TopMovieItem = ({ movie }) => {
  const { id, poster_path, title, release_date, vote_average } = movie;
  return (
    <NavLink to={`/movie/${id}`} className="topMovie__item">
      <span className="topMovie__item--popular">{`${vote_average * 10}%`}</span>
      <figure className="topMovie__item--image">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      </figure>
      <div className="topMovie__item--info">
        <h3>{title}</h3>
        <div>
          <span>Animación</span>
          <span>{release_date}</span>
        </div>
      </div>
    </NavLink>
  );
};
