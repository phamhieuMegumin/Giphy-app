import React, { useEffect, useState } from "react";
import GiphyItems from "./GiphyItems";
import Pagination from "../Paginations/Paginations";
function ListGiphy() {
  const [giphy, setGiphy] = useState([]);
  const [loading, setLoading] = useState(false);
  const total = 50;
  const [itemPerPage, setItemPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = itemPerPage * currentPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/trending?api_key=JjiRVm3bXZXAkfwAccSJB7bGELIXtT11&limit=${total}`
      );
      const res = await response.json();
      setLoading(false);
      setGiphy(res.data);
    };
    getData();
  }, []);
  const currentList = giphy.slice(indexOfFirstItem, indexOfLastItem);

  const changePage = (number) => {
    setCurrentPage(number);
  };
  return (
    <div className="container">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <div className="ListItems">
            {currentList.map((item) => {
              return (
                <GiphyItems key={item.id} data={item.images.original.url} />
              );
            })}
          </div>
          <Pagination
            total={total}
            changePage={changePage}
            itemPerPage={itemPerPage}
          />
        </>
      )}
    </div>
  );
}

export default ListGiphy;
