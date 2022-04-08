
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

    //Schema de validation avec yub
    const schema = yup.object({
        firstName: yup.string().required(),
        lasttName: yup.string().required(),
        departement: yup.string().required(),
        city: yup.string().required(),
        street: yup.string().required(),
        state: yup.string().required(),
        zipCode: yup.string().required(),
        
        dateOfBirth: yup.string().required(),
        dateOfStart: yup.string().required(),

        age: yup.number().positive().integer().required(),
    }).required();

    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees)
    const { register, handleSubmit, formState: { errors },formState, control } = useForm({mode:'onTouched', resolver: yupResolver(schema)} );
    const { isSubmitting, isSubmitted, isSubmitSuccessful } = formState;

    const onSubmitForm = (data) => {
        console.log(data)
        data.id = employees.length + 1;
        data.dateOfBirth = getDate(data.dateOfBirth)
        data.startDate = getDate(data.startDate)
        dispatch(employeeAdded(data))
    }  

    const  navigate = useNavigate()
     
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmitForm)} className="form-employee">
                { isSubmitSuccessful && navigate(`/list_employee`)} 
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
    );

}

