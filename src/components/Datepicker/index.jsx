import {  Controller } from "react-hook-form";
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

/**
 * @description component date
 * @param {*} param0 
 * @returns  {Reactnode}   jsx injected in DOM
 */

export default function Datepicker({data, register, errors, control}){
  
      
  
   return(<div className={`form-employee__input ${data.name}`}>

         <label className="form-label" htmlFor={data.id} >{data.label}</label>

         {/* inclure la validation avec les règles de validation HTML obligatoires ou standard */}
         <Controller
                  control={control}
                  name={data.name}
                  render={({ field }) =>(
                  <DatePicker
                  className="form-control"
                  name={data.name}
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  
                  />
                  )}
                  />   

         {/* des erreurs s'afficheront en cas d'échec de la validation du champ */} 

         {errors.hasOwnProperty(data.name) && <span className="input-error">{data.msg_error}</span>}   
             
   </div>)
}


/**
 * date PROPTYPES///////////////////////////////////
 */
 Datepicker.propTypes = {
      //data: PropTypes.objet.isRequired,
      //errors: PropTypes.func.isRequired,
      //control: PropTypes.func.isRequired,
      
    };
    
