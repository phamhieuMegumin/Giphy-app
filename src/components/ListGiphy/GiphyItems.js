import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./GiphyItems.css";
function GiphyItems(props) {
  const { data, handleOnClick } = props;
  const onClick = () => {
    handleOnClick(data);
  };
  return (
    <div className="item-container">
      <div className="img-box">
        <img src={data}></img>
      </div>
      <div className="btn-add">
        <Button color="primary" onClick={onClick}>
          Add to favorite
        </Button>
      </div>
    </div>
  );
}

export default GiphyItems;
