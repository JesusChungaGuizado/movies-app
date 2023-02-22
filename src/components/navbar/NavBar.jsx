import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { getGeneros } from "../../helpers/getGeneros";
import { getSearchMovie } from "../../helpers/getSearchMovie";

export const NavBar = () => {
  const [genero, setGenero] = useState([]);
  const { data, isLoading } = getGeneros();
  const { dataSearch, isLoadingSearch } = getSearchMovie();
  const inputSearch = useRef();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      // Realizar alguna acción cuando se presiona Enter
      console.log("Se presionó Enter");
      navigate({
        pathname: "/search",
        search: `?q=${inputSearch.current.value}`,
      });
    }
  };

  // const handleSearch = () => {
  //   console.log(inputSearch.current.value);
  // };
  useMemo(() => !isLoading && setGenero(data.genres), [data]);

  return (
    <nav className="NavBar">
      <Link to="/" className="NavBar__logo">
        Cuevana
      </Link>
      <ul className="NavBar__options">
        <li className="NavBar__options--option">
          Peliculas V
          <ul>
            {/* <li>
              <NavLink
                className={({ isActive }) => `${isActive ? "active" : ""}`}
                to="/home"
              >
                Peliculas
              </NavLink>
            </li> */}
          </ul>
        </li>
        <li className="NavBar__options--option">
          Generos V
          <ul>
            {genero.map(({ id, name }) => (
              <li key={id}>
                <NavLink to={`/genero/${id}`}>{name}</NavLink>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <form className="NavBar__search">
        <input
          onKeyDown={handleSearch}
          ref={inputSearch}
          type={"text"}
          placeholder="Search ..."
        />
      </form>
    </nav>
  );
};
