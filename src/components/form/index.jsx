
import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { useForm, Controller, register } from "react-hook-form";
import Input from "../input";
import form_inputs from '../../data/form_employee_inputs.json';
import select_inputs from '../../data/select_inputs.json';
import icoProfil from '../../assets/profil-ico.jpg';



import 'react-datepicker/dist/react-datepicker.css'

import './style.scss';
import Datepicker from "../Datepicker";

import { employeeAdded } from "../../redux/actions/employeeActions";
import Combo from "../Select";





const getDate  = (date) => {
    const dt = new Date(date);
    return dt.getFullYear() + '/'+ (dt.getMonth() + 1) + '/'+ dt.getDate()
} 

/**
 * @description component form employee
 * @component
 * 
 * @returns 
 */

export default function Form(){   

    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees)
    const { register, handleSubmit, formState: { errors },formState, control } = useForm({mode:'onTouched'});
    const { isSubmitting, isSubmitted, isSubmitSuccessful } = formState;

    const onSubmit = (data) => {
        data.id = employees.length + 1;
        data.dateOfBirth = getDate(data.dateOfBirth)
        data.startDate = getDate(data.startDate)
        dispatch(employeeAdded(data))
    }  

    const  navigate = useNavigate()

    //Etat select
    const [selectedOption, setSelectedOption] = useState(null);
  
    console.log(select_inputs.id)
     
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmit)} className="form-employee">
        
                <div className="form-employee__icon">
                    <img  src={icoProfil} alt="Wealth Health logo design" />
                </div>
                
                { isSubmitSuccessful && navigate(`/list_employee`)} 
        

                {
                    form_inputs.map((data, index) => (
                            <fieldset key={index}>
                            <legend className="addressDetail" >{data.name}</legend>
                                {
                                    data.inputs.map((input, ind) => (
                                        (input.type === 'date') ?
                                        <Datepicker  key={ind} data={input} register={register} errors={errors} control={control}/>
                                        : 
                                        <Input  key={ind} data={input} register={register} errors={errors}/>
                                    ))
                                }
                            </fieldset>
                
                    ))
                }  

                <div className="select">
                    <Combo
                           
                            
                            

                    />
                </div>
                

                <div className="mb-3">
                    <button type="submit" className="btn btn-success">Save</button>
                </div>
      </form>
    );

}