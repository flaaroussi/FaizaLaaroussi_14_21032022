
import React from 'react'
import { useTable, useSortBy } from 'react-table'
import EmployeeTable from '../../components/EmployeeTable';
import { useEffect } from 'react';
import './style.scss';


/**
 * @description render page
 * @component
 * 
 * @returns 
 */

export default function ListEmployee(){
   useEffect(() => {    
      document.title = `HRnet - Employee List`
      }, []);
 
  
   return(<main className="main">
               <h2 className='page-title'> Employee List  </h2>

               <EmployeeTable />
    
   </main>)
}