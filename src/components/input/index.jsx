import PropTypes from 'prop-types';


/**
 * @description Component Input
 * @param   {object}      props
 * @param   {object}      props.data             
 * @param   {functionxxxxx}      props.errors    
 * @param   {function}    props.register         
 *
 * @returns {Reactnode}   jsx injected in DOM
 */


export default function Input({data, register, errors}){
  
   const  isRequired = data.required;
  
   return(<div className={`form-employee__input ${data.name}`}>

         <label className="form-label" htmlFor={data.id} >{data.label}</label>

         {/* inclure la validation avec les règles de validation HTML obligatoires ou standard */}
         <input name={data.name} id={data.id} {...register(data.name, { required: isRequired })} className="form-control" />
         {/* des erreurs s'afficheront en cas d'échec de la validation du champ */} 

         {errors.hasOwnProperty(data.name) && <span className="input-error">{data.msg_error}</span>}   
             
   </div>)
}
/////////////////////////////////////////////

/**
 * Input PROPTYPES
 */
 Input.propTypes = {
     
      register: PropTypes.func,
    };