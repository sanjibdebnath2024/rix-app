import React, { useState } from 'react';


import FilterBigPop from '../filterpop/FilterBigPop';

function TableFilter() {

    
const [filterBigPopShow, setFilterBigPopShow] = useState(false)

const toggleFiltterPop = (b) => {
  let slideContent = b.currentTarget.children[1];

  if (slideContent.style.height === '0px' || slideContent.style.height === '') {
    slideContent.style.height = slideContent.scrollHeight + 'px';  // Slide Down
    slideContent.classList.add('filterPopShow');
  } else {
    slideContent.style.height = '0';  // Slide Up
    slideContent.classList.remove('filterPopShow');
  }
}

const showFiltterPop = () => {
  setFilterBigPopShow(!filterBigPopShow);
}

const changeFiltterPopState = (a) => {
  setFilterBigPopShow(a);
}

  return (
    <div className='tableFilter'>   
          <strong>User List</strong>         
            <div>
            <aside>
              <div className="totalFilter">Total <span>20 Users</span></div>
            <div className="filter">
              <div className="filterItem" onClick={toggleFiltterPop}><span>Status All</span>
              <div className='filterPop'><strong>Status</strong><a href="#">All</a><a href="#">Active</a><a href="#">Inactive</a><a href="#">All</a><a href="#">Active</a><a href="#">Inactive</a><a href="#">All</a><a href="#">Active</a><a href="#">Inactive</a></div>
              </div>
              <div className="filterItem"><span>User Type - All</span></div>
              <div className="filterItem"><span>Access Profile - All</span></div>
              </div>
              </aside>
          <aside> <a href="#" className='btn btn-primary'>Add User +</a>
          <span className='filterPopTrigger' onClick={showFiltterPop}>Filter</span>
          <span className='moreLinkTrigger'>more Link</span>
          </aside>
          <FilterBigPop changeFiltterPopState={changeFiltterPopState} filterBigPopShow={filterBigPopShow} />
            </div>
          </div>    
  )
}

export default TableFilter
