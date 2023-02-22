import React, { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { TopMovie } from "../components/aside/TopMovie";
import { Loader } from "../components/Loader";
import { MovieListCard } from "../components/MovieListCard";
import { getGeneros } from "../helpers/getGeneros";
import { getMoviesGenero } from "../helpers/getMoviesGenero";
import { getSearchMovie } from "../helpers/getSearchMovie";

export const MovieList = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState({});
  const [genero, setGenero] = useState([]);
  const { data, isLoading } = getGeneros();
  const { dataMovie, isLoadingMovie } = getMoviesGenero(id);
  const [searchParams] = useSearchParams();
  let q = searchParams.get("q");
  useMemo(() => !isLoadingMovie && setMovies(dataMovie.results), [dataMovie]);

  useMemo(() => {
    !isLoading && setTitle(data.genres.find((genero) => genero.id == id));
  }, [data, id]);
  const handleGeneros = (id) => {
    if (!isLoading) {
      return data.genres.find((gen) => gen.id === id);
    }
    return;
  };
  const { dataSearch, isLoadingSearch } = getSearchMovie(q);
  useMemo(
    () => !isLoadingSearch && setMovies(dataSearch.results),
    [dataSearch, q]
  );

  return (
    <section className="listMovies">
      {movies.length > 0 ? (
        <div>
          <h2 className="subtitle">
            {title != null ? title.name : `Resultados Encontrados "${q}"`}
          </h2>

          <div>
            {movies.map((movies) => (
              <MovieListCard
                key={movies.id}
                movies={movies}
                handleGeneros={handleGeneros}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="message">No se encontraron resultados</div>
      )}
      <TopMovie />
    </section>
  );
};
