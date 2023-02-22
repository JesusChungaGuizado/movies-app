import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Loader } from "./Loader";

export const MovieListCard = ({ movies, handleGeneros }) => {
  const {
    id,
    poster_path,
    title,
    original_title,
    release_date,
    overview,
    genre_ids,
  } = movies;

  // const navigate = useNavigate();
  // const location = useLocation();
  // const onSearchGenero = (id) => {
  //   console.log(id);
  //   navigate({
  //     pathname: `/genero/${id}`,
  //   });
  // };
  // onClick={() => onSearch(id)}

  return (
    <div className="CardMovieListContainer">
      <NavLink to={`/movie/${id}`}>
        <figure className="CardMovieList__image">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        </figure>
      </NavLink>
      <section className="CardMovieList__info">
        <NavLink to={`/movie/${id}`} className="CardMovieList">
          <div>
            <div className="CardMovieList__info--title">
              <h4>{title}</h4>
              <p>
                {original_title} <span> {release_date} </span>
              </p>
            </div>
            <div className="CardMovieList__info--sinopsis">
              <h5>Sinopsis</h5>
              <p>{overview.split("", 350)} </p>
            </div>
          </div>
        </NavLink>
        <div className="CardMovieList__info--buttons">
          {genre_ids.map((id) => (
            // <button key={id}>{handleGeneros(id).name}</button>
            <NavLink key={id} to={`/genero/${id}`}>
              <button>{handleGeneros(id).name}</button>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  );
};
