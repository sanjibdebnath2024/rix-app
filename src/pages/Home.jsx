import React from 'react'
import Table from '../components/table/Table';
import TableFilter from '../components/table/TableFilter';

function Home() {
  return (
    <>
       <div className=" box mb-3">

<div className="pageHead"><h1 className='mb-0'>User Management</h1><span>Manage users & their account and permission here.</span></div>
  <TableFilter />      
</div>


<Table />
    </>
  )
}

export default Home
