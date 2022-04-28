import React, { useMemo } from 'react';
import { useSelector } from 'react-redux'

import { 
   useTable, 
   useSortBy,
   useGlobalFilter, 
   usePagination} from 'react-table';

import { TABLE_COLUMNS } from './TableColumns';
import TableFilter from './TableFilter';

import './style.scss';



/**
 * @description component Table employee
 * @component
 * 
 * @returns {Reactnode}   jsx injected in DOM
 */

export default function EmployeeTable(){  
  //Récupéré les données du state avec useSelector
  const employees = useSelector((state) => state.employees)
  //
  const data = useMemo(() => employees ,[employees])
          
  // useMemo HOOK to avoid re-rendering until the data changes
  const columns = useMemo(() => TABLE_COLUMNS, []);
  
  // Table instance
  const tableInstance =  useTable(
                            {
                              columns: columns,
                              data: data,
                            },
                            useGlobalFilter,
                            useSortBy,
                            usePagination
                        )
//proprité du table :TABLE PROPS to define table instance
  const  {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,    
    state,
    setGlobalFilter,
    prepareRow,
    rows
  } = tableInstance
   // handle TABLE STATE for different options
   const { globalFilter, pageIndex, pageSize } = state;
  return (
    <>
      <header className='table-header'>        
          <div className='show-entrie'>
              <span>Show</span>
              <select tabIndex="0" className='form-select'
                  value={pageSize}
                  onChange={e => {
                    setPageSize(Number(e.target.value))
                  }}
                  >
                  {[10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                    {pageSize}
                    </option>
                  ))}
              </select>
              <span>entries</span>
          </div>
          <div tabIndex="0" className='totalEmployee'>
              {rows.length} Employees
          </div> 
          <div className='table-header__filter'>
              <TableFilter                
                className="table-header--search"
                id="search-input"
                filter={globalFilter}
                setFilter={setGlobalFilter}
              />
          </div>
      </header>
      <main className="table-main">
          <table {...getTableProps()} className="employee-table table">
            <thead>
            
                  {// Loop over the header rows
                  headerGroups.map(headerGroup => (
                    // Apply the header row props
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {// Loop over the headers in each row
                      headerGroup.headers.map(column => (
                        // Apply the header cell props
                        <th className='table-hrnet-success' {...column.getHeaderProps(column.getSortByToggleProps())}>
                          {// Render the header
                          column.render('Header')}
                          {/* Add a sort direction indicator */}
                            <span className='sortIcone'>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? <i className="fas fa-angle-up"></i>
                                : <i className="fas fa-angle-down"></i>
                              : ''}
                              </span>
                        </th>
                      ))}
                    </tr>
                  ))}
            </thead>
            {/* Apply the table body props */}
            <tbody {...getTableBodyProps()}>
                  {// Loop over the table rows
                  page.map((row,i) => {
                    // Prepare the row for display
                    prepareRow(row)
                    return (
                      // Apply the row props
                      <tr {...row.getRowProps()}>
                        {// Loop over the rows cells
                        row.cells.map(cell => {
                          // Apply the cell props
                          return (
                            <td tabIndex="0" {...cell.getCellProps()}>
                              {// Render the cell contents
                              cell.render('Cell')}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
            </tbody>
          </table>
      </main>
      <footer className="table-pagination">      
          <div className='gotopage'>
                <span>
                    Page{' '}
                    <strong>
                      {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>|</span>
                <label htmlFor='pager_number'>Go to page:{' '}</label>
                <span>                  
                    <input
                    id = "pager_number"
                          className='form-control'
                          type="number"
                          defaultValue={pageIndex + 1}
                          onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                          }}
                          style={{ width: '100px' }}
                    />
                </span>{' '}
          </div>
          {/* Bottons of pagination */}
          <div className="table-pagination__btn">
              <button className="btn" onClick={() => gotoPage(0)} disabled={!canPreviousPage} aria-label="go to first page">
                  <i className="fas fa-angle-double-left"></i>
              </button>{' '}
              <button className="btn" onClick={() => previousPage()} disabled={!canPreviousPage} aria-label="go to previous page">
                <i className="fas fa-angle-left"></i>
              </button>{' '}
              <button className="btn" onClick={() => nextPage()} disabled={!canNextPage} aria-label="go to next page">
              <i className="fas fa-angle-right"></i>
              </button>{' '}
              <button className="btn" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} aria-label="go to last page">
                <i className="fas fa-angle-double-right"></i>
              </button>{' '}
          </div>
      </footer>
   </>
  )
}