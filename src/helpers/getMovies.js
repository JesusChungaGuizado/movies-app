import { API, API_KEY } from "../config/constApi";
import { useFetch } from "../hooks/useFetch";

export const getMovies = () => {
  const { data, isLoading } = useFetch(
    `${API}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
  );
  return {
    data: data,
    isLoading: isLoading,
  };
};
