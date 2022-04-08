import React from 'react'


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
      <select name={data.name} id={data.id} {...register(data.name,  { required: isRequired })} className="form-select">
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