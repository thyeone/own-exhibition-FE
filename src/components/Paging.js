import { useEffect } from "react";
import Pagination from "react-js-pagination";
import Pagintion from "../components/styles/Pagination.css";

const Paging = ({ page, count, data, handlePageChange }) => {
  console.log(page, data);

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={count.per_page}
      totalItemsCount={count.total}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};

export default Paging;
