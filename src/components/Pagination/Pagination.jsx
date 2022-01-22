import { useState } from 'react';
import './Pagination.css';

export default function Pagination({ data, RenderComponent, dataLimit }) {
  const pageLimit = Math.ceil(data.length / dataLimit);
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page >= pageLimit ? pageLimit : page + 1 );
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page === 1 ? page : page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <>
      {getPaginatedData().map((d, idx) => (
        <RenderComponent key={idx} data={d} />
      ))}  
      
      {getPaginatedData().length % 2 !== 0 && <div className="card"></div>}
      
      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
        >
          prev
        </button>
  
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`pagination-item ${currentPage === item ? 'active' : null}`}
          >
            <span>{item}</span>
          </button>
        ))}
  
        <button
          onClick={goToNextPage}
          className={`next ${currentPage >= pageLimit ? 'disabled' : ''}`}
        >
          next
        </button>
      </div>

    </>
  );
}