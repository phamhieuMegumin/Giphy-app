import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Spinner } from "reactstrap";
import "./GiphyItems.css";
import { AuthContext } from "../../Context/AuthContext";
import FavoritesService from "../../Services/FavoriteService";
function GiphyItems(props) {
  const { data } = props;
  const [spinner, setSpinner] = useState(false);
  const [message, setMessage] = useState(null);
  const history = useHistory();
  const authContext = useContext(AuthContext);

  // add to favotites
  const onClick = () => {
    if (authContext.isAuthenticated) setSpinner(true);
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
      setSpinner(false);
    });
    if (!authContext.isAuthenticated) history.push("/Giphy-app/login");
  };

  return (
    <div className="item-container">
      <div className="img-box">
        <img src={data}></img>
      </div>
      <div className="btn-add">
        <Button color="primary" onClick={onClick}>
          Add to favorite
          {spinner ? (
            <Spinner color="light" size="sm" style={{ marginLeft: 10 }} />
          ) : (
            ""
          )}
        </Button>
      </div>
    </div>
  );
}

export default GiphyItems;
