
import React from 'react'
import { Link } from 'react-router-dom';
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
 
  
   return(<main className="main" aria-labelledby="page-title">
            <div className='bloc'>
               <div className='header'>
                  <div className="title" >Employee List</div>
                  <Link  to="/create_employee" className='btn btn-outline-success' data-cy="create-new-employee">
                        <i className="fas fa-user-plus" alt="Wealth Health icone create"></i>   
                        <span>Add employee</span>
                   </Link>                  
               </div>
               <div className='body'>
               <EmployeeTable />
               </div>
            </div>    
   </main>)
}