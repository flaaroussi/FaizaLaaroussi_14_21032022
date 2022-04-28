import {  Controller } from "react-hook-form";
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

/**
 * @description component date
 * @param {*} param0 
 * @returns  {Reactnode}   jsx injected in DOM
 */

export default function Datepicker({data,  errors, control}){
  
      
  
   return(<div className={`form-employee__input ${data.name}`}>

         <label className="form-label" htmlFor={data.id} >{data.label}</label>

         {/* inclure la validation avec les règles de validation HTML obligatoires ou standard */}
         <Controller
                  control={control}
                  name={data.name}
                  render={({ field }) =>(
                  <DatePicker
                  id={data.id}
                  className="form-control"
                  name={data.name}
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  aria-required="true" 
                  tabIndex={data.index}
                  aria-labelledby={data.id} 
                  placeholder={data.name}
                  />
                  )}
                  />   

         {/* des erreurs s'afficheront en cas d'échec de la validation du champ */} 

         {errors.hasOwnProperty(data.name) && <span className="input-error">{data.msg_error}</span>}   
             
   </div>)
}

/**
 * date PROPTYPES
 */
 Datepicker.propTypes = {
      data: PropTypes.object.isRequired,
      errors: PropTypes.object.isRequired,
      control: PropTypes.object.isRequired,
    };
    
