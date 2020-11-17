import React, { useEffect, useState } from "react";
import GiphyItems from "./GiphyItems";

function ListGiphy() {
  const [giphy, setGiphy] = useState([]);
  const total = 15;

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

  return (
    <div className="container">
      <div className="ListItems">
        {giphy.map((item) => {
          return <GiphyItems key={item.id} data={item.images.original.url} />;
        })}
      </div>
    </div>
  );
}

export default ListGiphy;
