import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react'

interface Props {
    handleNextPageClick: () => void;
  
    handlePreviousPageClick: () => void;
    totalPages: number;
    currentPage: number;
    handleCurrentPageClick: (page: number) => void;
  }
const paginationStyles = {
    previousButton: `inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md`,
    style_1: `inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md`,
  };
const Pagination = ({
    handleNextPageClick,

  handlePreviousPageClick,
  totalPages,
  currentPage,
  handleCurrentPageClick
}: Props
) => {
  return (
    <div className="flex justify-center space-x-1 dark:text-gray-100 my-10">
       <button
        title="previous"
        type="button"
        className={paginationStyles.previousButton}
        onClick={handlePreviousPageClick}
        disabled={currentPage === 1}
     
      >
        <Icon icon="mingcute:left-line" />
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            type="button"
            onClick={() => handleCurrentPageClick(page)}
            disabled={currentPage === page}
            className={`${paginationStyles.style_1} ${currentPage === page? "bg-green-400":""}`}
          >
            {page}
          </button>
        )
      )}

<button
        title="next"
        type="button"
        className={paginationStyles.previousButton}
        onClick={handleNextPageClick}
      
      >
        <Icon icon="mingcute:right-line" />
      </button> 
    </div>
  )
}

export default Pagination