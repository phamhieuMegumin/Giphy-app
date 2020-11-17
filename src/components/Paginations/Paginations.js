import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "./Pagination.css";
function Paginations(props) {
  const { total, changePage, itemPerPage } = props;
  const listPagination = [];
  for (let i = 1; i <= Math.ceil(total / itemPerPage); i++)
    listPagination.push(i);

  const onClick = (number) => {
    changePage(number);
  };
  return (
    <div className="pagination">
      <Pagination>
        {listPagination.map((number) => {
          return (
            <PaginationItem>
              <PaginationLink href="#" onClick={() => onClick(number)}>
                {number}
              </PaginationLink>
            </PaginationItem>
          );
        })}
      </Pagination>
    </div>
  );
}

export default Paginations;
