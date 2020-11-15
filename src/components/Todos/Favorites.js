import React, { useEffect, useState } from "react";
import FavoriteItems from "./FavoriteItems";
import FavoritesService from "../../Services/FavoriteService";
import "./Favorites.css";
function Todos() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    FavoritesService.getFavorite().then((data) => {
      setFavorites(data.favorites);
    });
  }, []);
  return (
    <div>
      <h1 style={{ marginBottom: 30, textAlign: "center", marginTop: 20 }}>
        Your favorite list
      </h1>
      <div className="favorite-container">
        {favorites.map((favorite) => {
          return <FavoriteItems key={favorite._id} listfavorite={favorite} />;
        })}
      </div>
    </div>
  );
}

export default Todos;
