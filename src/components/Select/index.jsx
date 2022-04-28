import React from 'react'
import PropTypes from 'prop-types';

/**
 * @description component combo
 * @component
 * 
 * @returns 
 */

 export default function Combo({data, register, errors}){  
  const  isRequired = data.required;

  return( 
    <div className={`form-employee__input ${data.name}`}>
      <label className="form-label" htmlFor={data.id}>{data.label}</label>
      <select name={data.name} id={data.id} {...register(data.name,  { required: isRequired })} className="form-select" aria-required={isRequired} aria-labelledby={data.id} tabIndex={data.index}>
        {
          data.options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))
        }
      </select>
       {errors.hasOwnProperty(data.name) && <span className="input-error">{data.msg_error}</span>} 
    </div>
    )
   
}

/**
 * Input PROPTYPES
 */
 Combo.propTypes = {
  data: PropTypes.object,
  register: PropTypes.object,
  errors: PropTypes.object
};