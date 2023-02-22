import React, { useMemo, useState } from "react";
import { getTopMovies } from "../../helpers/getTopMovies";
import { Loader } from "../Loader";
import { TopMovieItem } from "./TopMovieItem";

export const TopMovie = () => {
  const [movie, setMovie] = useState([]);
  const { data, isLoading } = getTopMovies();

  useMemo(() => {
    !isLoading && setMovie(data.results);
    console.log(movie);
  }, [isLoading]);
  return (
    <aside>
      <h2 className="subtitle">Tendencias</h2>
      {!isLoading ? (
        <div className="topMovie">
          {movie.map((movie) => (
            <TopMovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </aside>
  );
};
