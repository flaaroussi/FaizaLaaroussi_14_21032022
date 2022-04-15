
import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useForm, Controller, register } from "react-hook-form";

import form_inputs from '../../data/form_employee_inputs.json';
import { employeeAdded } from "../../redux/actions/employeeActions";

import Input from "../input";
import Combo from "../Select";
import Datepicker from "../Datepicker";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import 'react-datepicker/dist/react-datepicker.css'
import './style.scss';

import { Modal } from 'reactmodalfz';
import 'reactmodalfz/dist/index.css'


const getDate  = (date) => {
    const dt = new Date(date);
    return dt.getFullYear() + '/'+ (dt.getMonth() + 1) + '/'+ dt.getDate()
} 



/**
 * @description component form employee
 * @component
 * 
 * @returns {Reactnode}   jsx injected in DOM
 */

export default function Form(){   
    const [isOpen, setIsOpen]  = useState(0); 
    const  navigate = useNavigate()
    
    const goToEmployeeList = ()=>{
        //fermer le modal
        setIsOpen(0)
        //puis redirect
        navigate(`/employee_list`)
    }
    //Schema de validation avec yub
    const schema = yup.object({
        firstName: yup.string().required().min(3),
        lastName: yup.string().required(),
        departement: yup.string().required(),
        city: yup.string().required(),
        street: yup.string().required(),
        state: yup.string().required(),
        zipCode: yup.number().required(),
        
    }).required();

    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees)
    const { register, handleSubmit, formState: { errors },formState, control } = useForm({mode:'onTouched', resolver: yupResolver(schema)} );
    const { isSubmitSuccessful } = formState;

    const onSubmitForm = (data) => {
        alert(1)
        console.log(data)
        data.id = employees.length + 1;
        data.dateOfBirth = getDate(data.dateOfBirth)
        data.startDate = getDate(data.startDate)
        dispatch(employeeAdded(data));
        //opne modal confirmation
        setIsOpen(isOpen ? 0 : 1)
        
    }  

   
     
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
     <> <form onSubmit={handleSubmit(onSubmitForm)} className="form-employee">
                
                <div className="inputs">
                    {
                        form_inputs.map((data, index) => (
                                <fieldset key={index}>
                                    <legend className="addressDetail" >{data.name}</legend>
                                        {
                                            data.inputs.map((input, ind) => (
                                                (input.type === 'date') ?
                                                <Datepicker  key={ind} data={input} register={register} errors={errors} control={control} />
                                                : 
                                                (input.type === 'combo') ?
                                                    <Combo  key={ind} data={input} register={register} errors={errors}/>
                                                :
                                                <Input  key={ind} data={input} register={register} errors={errors}/>
                                            ))
                                        }
                                </fieldset>
                        ))
                    } 
                </div>

                <div className="mb-3">
                    <Link to="/employee_list" className="btn btn-outline-danger">Cancel</Link>
                    <button type="submit" className="btn btn-outline-success">Save</button>
                </div>
                
                
   
      </form>
      <button onClick={() => setIsOpen(isOpen ? 0 : 1)}>Click me!</button>
      <Modal 
      isOpen={isOpen}
      title="Confirmation"
      width="500px"
      onClose={setIsOpen}
      modalContent={<p>New employee successfully registered</p>}
      footerContent={<><button onClick={() => setIsOpen(isOpen ? 0 : 1)} className="btn">Add new employee</button><button onClick={() =>goToEmployeeList()}>Employee List</button></>} 
      openCloseModal=""
    />
  </>
    );

}

