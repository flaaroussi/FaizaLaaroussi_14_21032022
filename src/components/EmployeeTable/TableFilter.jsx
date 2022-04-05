import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

import searchIcon from '../../assets/ico-search.svg';

import PropTypes from 'prop-types';

/**
 * @description TableFilter
 *
 * @param   {object}      props
 * @param   {string}      props.filter        
 * @param   {function}    props.setFilter     
 * @param   {string}      props.className     
 * @param   {string}      props.id            
 *
 * @returns {Reactnode}   jsx injected in DOM
 */
export default function TableFilter({ filter, setFilter, className, id }) {
  
  const [value, setValue] = useState(filter);

  const handleChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 500);

  return (
    <>
          <img src={searchIcon} alt="search icon" />
          <label htmlFor={id}>Search</label>
          <input
            className='form-control'
            id={id}
            type="search"
            role="searchbox"
            value={value || ''}
            onChange={(e) => {
              setValue(e.target.value);
              handleChange(e.target.value);
            }}
          />
    </>
  );
}

/**
 * TableFilter PROPTYPES
 */
TableFilter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
