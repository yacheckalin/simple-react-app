import React from 'react';

import {useHistoryContext} from './history-context-provider';

const Pagination = () => {
  const {currentPage, totalPages, forward, backward} = useHistoryContext();
  return (
    <div className="pagination-container">
      {currentPage > 0 && (<span onClick={backward}>&#8592;</span>)} {currentPage + 1} / {totalPages}
      {currentPage + 1 < totalPages && (<span onClick={forward}>&#8594;</span>)}
    </div>
  )
}

export default Pagination;