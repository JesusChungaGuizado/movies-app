import { API, API_KEY } from "../config/constApi";
import { useFetch } from "../hooks/useFetch";

export const getTopMovies = () => {
  const { data, isLoading } = useFetch(
    `${API}/discover/movie?sort_by=popularity.desc&with_genres=35&api_key=${API_KEY}`
  );
  return {
    data: data,
    isLoading: isLoading,
  };
};
