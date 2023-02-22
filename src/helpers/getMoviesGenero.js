import { API, API_KEY } from "../config/constApi";
import { useFetch } from "../hooks/useFetch";

export const getMoviesGenero = (genero) => {
  const { data, isLoading } = useFetch(
    `${API}/discover/movie?sort_by=popularity.desc&with_genres=${genero}&api_key=${API_KEY}`
  );
  return {
    dataMovie: data,
    isLoadingMovie: isLoading,
  };
};
