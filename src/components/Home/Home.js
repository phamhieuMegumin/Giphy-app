import React from "react";
import ListGiphy from "../ListGiphy/ListGiphy";
import "./Home.css";
function Home() {
  return (
    <div className="home-page">
      <h1>Top Trending Giphy</h1>
      <ListGiphy />
    </div>
  );
}

export default Home;
