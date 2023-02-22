import React from "react";

export const BannerItem = ({ movie, indicador }) => {
  return (
    <>
      {indicador === 0 ? (
        <div className="pelicula-principal carousel-item active">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
            width="1100"
            min-height="500"
          />
          <div className="contenedor">
            <h3 className="titulo">{movie.title}</h3>
            <p className="descripcion">{movie.overview}</p>
            <div className="contenedor-botones">
              <button role="button" className="boton">
                <i className="fas fa-play"></i> Reproducir
              </button>
              <button role="button" className="boton">
                <i className="fas fa-info-circle"></i> Más información
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="pelicula-principal carousel-item ">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
            width="1100"
            min-height="500"
          />
          <div className="contenedor">
            <h3 className="titulo">{movie.title}</h3>
            <p className="descripcion">{movie.overview}</p>
            <div className="contenedor-botones">
              <button role="button" className="boton">
                <i className="fas fa-play"></i> Reproducir
              </button>
              <button role="button" className="boton">
                <i className="fas fa-info-circle"></i> Más información
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
