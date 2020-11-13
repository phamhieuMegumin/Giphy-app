import React, { useContext, useEffect, useState } from "react";
import GiphyItems from "./GiphyItems";
import FavoritesService from "../../Services/FavoriteService";
import { AuthContext } from "../../Context/AuthContext";
function ListGiphy() {
  const [giphy, setGiphy] = useState([]);
  const [pagination, setPagination] = useState(1);
  const total = 15;
  const itemOnPage = 15;
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/trending?api_key=JjiRVm3bXZXAkfwAccSJB7bGELIXtT11&limit=${total}`
      );
      const res = await response.json();
      setGiphy(res.data);
    };
    getData();
  }, []);
  const authContext = useContext(AuthContext);
  const [message, setMessage] = useState(null);
  const handleOnClick = (data) => {
    const favorite = {
      url: data,
    };
    FavoritesService.postFavorite(favorite).then((data) => {
      const { message } = data;
      if (!message.msgError) {
        FavoritesService.getFavorite().then((getData) => {
          setMessage(message);
        });
      } else if (message.msgBody === "UnAuthorzied") {
        setMessage(message);
        authContext.setUser({ username: "", role: "" });
        authContext.setIsAuthenticated(false);
      } else {
        setMessage(message);
      }
    });
  };
  return (
    <div className="container">
      <div className="ListItems">
        {giphy.map((item) => {
          return (
            <GiphyItems
              key={item.id}
              data={item.images.original.url}
              handleOnClick={handleOnClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ListGiphy;
