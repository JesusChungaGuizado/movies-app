import React from "react";
import { TopMovie } from "../components/aside/TopMovie";
import Banner from "../components/banner/Banner";

import { Movies } from "../components/Movie/Movies";

export const Home = () => {
  return (
    <div className="home">
      <TopMovie />
      <Movies />
    </div>
  );
};
