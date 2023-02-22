import React, { useMemo, useState } from "react";
import { getMovies } from "../../helpers/getMovies";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../Loader";
import { MovieCard } from "./MovieCard";

export const Movies = () => {
  const [movie, setMovie] = useState([]);

  const { data, isLoading } = getMovies();
  const handleSearchMovie = (id) => {
    console.log("Hola" + id);
  };
  useMemo(() => {
    !isLoading && setMovie(data.results);
    console.log(movie);
  }, [isLoading]);
  return (
    <div className="movies">
      <h2 className="subtitle">Películas</h2>
      {!isLoading ? (
        <section>
          {movie.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              handleSearchMovie={handleSearchMovie}
            />
          ))}
        </section>
      ) : (
        <div className="movies">
          <Loader />
        </div>
      )}
    </div>
  );
};
