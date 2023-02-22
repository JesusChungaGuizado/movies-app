import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const URL = "https://api.themoviedb.org/3";
  const api_key = "fb94db3e13907d15b1f21059419a4aff";
  const { data, isLoading } = useFetch(
    `${URL}/movie/${id}/videos?api_key=${api_key}&language=en-US`
  );
  useMemo(() => {
    !isLoading && setMovie(data.results[0].key);
    console.log(movie);
  }, [isLoading]);
  return (
    <div>
      MovieDetail {id}
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${movie}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
