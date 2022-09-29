// import axios from 'axios';
import React, { useState } from 'react'
import Paginate from 'react-paginate';
import ShopProduct from './ShopProduct'

function ShopProducts({list}) {

  // pagenation
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 6;
  const pagesVisited = pageNumber * productPerPage;
  const pageCount = Math.ceil(list.length / productPerPage);
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div className='spr-container'>
      
        {
          list.length === 0 ? (
            <h3 className='no-data'>There is currently no Products</h3>
          ) : (
            <>
              <div className='spr-list'>
                {list.slice(pagesVisited, pagesVisited + productPerPage).map((product) => (
                  <ShopProduct key={product._id} product={product} />
                ))}
              </div>
              <div className='spr-pagi'>
                <Paginate className='filter-pagination'
                  previousLabel={"Perv"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  pageClassName={"pagi-item"}
                  pageLinkClassName={"pagi-link"}
                  activeClassName={"pagi-active"}
                  activeLinkClassName={"pagi-active-link"}
                  previousClassName={"pagi-item"}
                  previousLinkClassName={"pagi-link"}
                  nextClassName={"pagi-item"}
                  nextLinkClassName={"pagi-link"}
                  breakClassName={"pagi-item"}
                  breakLinkClassName={"pagi-link"}
                  disabledClassName={"disabledPagi"} />
                </div>  
            </>
          )
        }
      </div>
  
  )
}

export default ShopProducts