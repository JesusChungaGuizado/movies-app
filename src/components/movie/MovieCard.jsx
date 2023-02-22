import React from "react";
import { NavLink } from "react-router-dom";

export const MovieCard = ({ movie, handleSearchMovie }) => {
  const { id, poster_path, title, original_title, release_date } = movie;
  return (
    <NavLink
      to={`movie/${id}`}
      onClick={() => handleSearchMovie(id)}
      className="movie__content"
    >
      {
        poster_path!=null ?(<figure className="movie__content--image">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      </figure>):(
     <div className="image-loading"></div>
      )
      }
     
   
      <div className="movie__content--info">
        <span>{title}</span>
        <span>{original_title}</span>
        <span>{release_date}</span>
      </div>
    </NavLink>
  );
};
