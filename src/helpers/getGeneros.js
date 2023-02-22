import { API, API_KEY } from "../config/constApi";
import { useFetch } from "../hooks/useFetch";

export const getGeneros = () => {
  const { data, isLoading } = useFetch(
    `${API}/genre/movie/list?language=en-US&api_key=${API_KEY}`
  );
  return {
    data,
    isLoading,
  };
};
