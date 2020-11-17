import React, { useEffect, useState } from "react";
import FavoriteItems from "./FavoriteItems";
import FavoritesService from "../../Services/FavoriteService";
import "./Favorites.css";
function Todos() {
  const [favorites, setFavorites] = useState([]);
  const [render, setRender] = useState(false);
  useEffect(() => {
    FavoritesService.getFavorite().then((data) => {
      setFavorites(data.favorites);
    });
  }, [render]);
  const isRender = () => {
    setRender(!render);
  };
  return (
    <div>
      <h1 style={{ marginBottom: 30, textAlign: "center", marginTop: 20 }}>
        Your favorite list
      </h1>
      <div className="favorite-container">
        {favorites.map((favorite) => {
          return (
            <FavoriteItems
              key={favorite._id}
              listfavorite={favorite}
              render={isRender}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
