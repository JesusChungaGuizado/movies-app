import { API, API_KEY } from "../config/constApi";
import { useFetch } from "../hooks/useFetch";

export const getSearchMovie = (query,page=1) => {
  const { data, isLoading } = useFetch(
       `${API}/search/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
  );
  return {
    dataSearch: data,
    isLoadingSearch: isLoading,
  };
};
