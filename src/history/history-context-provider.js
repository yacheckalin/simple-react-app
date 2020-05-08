import React, { useContext, useState, useEffect } from "react";

import { data } from "./data";
import { INITIAL_PAGINATION_PAGE, DEFAULT_PAGINATION_LIMIT } from "./constants";
import { customSort } from "./helpers";

export const HistoryContext = React.createContext();
export const useHistoryContext = () => useContext(HistoryContext);

const HistoryContextProvider = ({ children }) => {
  const [paginationList, setPaginationList] = useState([]);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGINATION_PAGE);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    //TODO: change this part for axios request to API
    const successResponse = { result: "ok", deals: data };
    const fetchData = () => Promise.resolve(successResponse);
    let paginated = [];

    const paginate = (data) => {
      return data.splice(
        currentPage * DEFAULT_PAGINATION_LIMIT,
        DEFAULT_PAGINATION_LIMIT
      );
    };

    fetchData().then((response) => {
      if (response.result === "ok") {
        const sorted = customSort(response.deals, currentPage);
        paginated = paginate(sorted);
        setTotalPages(
          Math.floor(response.deals.length / DEFAULT_PAGINATION_LIMIT)
        );

        setPaginationList(paginated);
      }
    });
    return () => setPaginationList(paginated);
  }, [currentPage]);

  const backward = () => {
    setCurrentPage(currentPage - 1);
  };

  const forward = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <HistoryContext.Provider
      value={{
        data: paginationList,
        backward,
        forward,
        currentPage,
        totalPages,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryContextProvider;
