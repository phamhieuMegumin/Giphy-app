import React from "react";

function TodoItems(props) {
  const { listfavorite } = props;
  const url = listfavorite.url;
  return (
    <div className="item-container">
      <div className="img-box">
        <img src={url}></img>
      </div>
    </div>
  );
}

export default TodoItems;
