
interface Props {
    handleNextPageClick: () => void;
  
    handlePreviousPageClick: () => void;
    totalPages: number;
    currentPage: number;
    handleCurrentPageClick: (page: number) => void;
    totalProperties:number;
  }
const Pagination = ({
    handleNextPageClick,
  
    handlePreviousPageClick,
    totalPages,
    currentPage,
    handleCurrentPageClick,
    totalProperties
  }: Props) => {
  return (
    <div className="flex items-center justify-between pt-4 overflow-x-auto" aria-label="Table navigation">
    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">page {currentPage} of {totalPages}</span> of <span className="font-semibold text-gray-900 dark:text-white"> {totalProperties} total properties</span></span>
    <ul className="inline-flex -space-x-px text-sm h-8">
        <li>
            <button className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
             type="button"
             onClick={handlePreviousPageClick}
             disabled={currentPage === 1}>Previous</button>
        </li>
      {  Array.from({length: totalPages},(_,index)=>index+1).map((page)=>(
        <li  key={page}>
        <button className={`${currentPage === page? "bg-primary text-white":"bg-white text-gray-500"} flex items-center justify-center px-3 h-8 leading-tight   border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          type="button"
          onClick={() => handleCurrentPageClick(page)}
          disabled={currentPage === page}>{page}</button>
    </li>
      ))}
      
        <li>
            <button 
             type="button"
             disabled={currentPage === totalPages}
             onClick={handleNextPageClick}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
        </li>
    </ul>
</div>
  )
}

export default Pagination