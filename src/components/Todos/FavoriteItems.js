import React, { useState } from "react";
import { Button, Spinner } from "reactstrap";
import FavoritesServices from "../../Services/FavoriteService";
function TodoItems(props) {
  const { listfavorite, render } = props;
  const [message, setMessage] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const url = listfavorite.url;
  const handleOnClick = () => {
    const deleteUrl = {
      url: url,
    };
    setSpinner(true);
    FavoritesServices.delete(deleteUrl).then((data) => {
      const { message } = data;
      if (message.msgError) {
        setMessage(message.msgError);
      }
      render(url);
    });
  };
  return (
    <div className="item-container">
      <div className="img-box">
        <img src={url}></img>
      </div>
      <div className="btn-delete">
        <Button color="danger" onClick={handleOnClick}>
          Delete
          {spinner ? (
            <Spinner
              color="light"
              size="sm"
              style={{ marginLeft: 10 }}
            ></Spinner>
          ) : (
            ""
          )}
        </Button>
      </div>
    </div>
  );
}

export default TodoItems;
