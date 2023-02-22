import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MovieCard } from "../components/Movie/MovieCard";
import { NavBar } from "../components/navbar/NavBar";
import { Home } from "../pages/Home";
import { MovieDetail } from "../pages/MovieDetail";
import { MovieList } from "../pages/MovieList";
import { Search } from "../pages/Search";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<MovieList />} />
          <Route path="/genero/:id" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
};
