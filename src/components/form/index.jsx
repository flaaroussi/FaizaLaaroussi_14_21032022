
import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useForm} from "react-hook-form";
import moment from "moment";

import form_inputs from '../../data/form_employee_inputs.json';
import { employeeAdded } from "../../redux/actions/employeeActions";
import Input from "../input";
import Combo from "../Select";
import Datepicker from "../Datepicker";
import { Modal } from 'reactmodalfz';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import 'react-datepicker/dist/react-datepicker.css'
import './style.scss';
import 'reactmodalfz/dist/index.css'

/**
 * Formater la date avec la librairie moment
 * @param {*} date 
 * @returns date exemple 01/03/2022
 */
const getDate  = (date) => {
    moment.locale('fr'); 
    return moment(date).subtract(10, 'days').calendar();  
} 

/**
 * @description création component form employee
 * @component
 * 
 * @returns {Reactnode}   jsx injected in DOM
 */
export default function Form(){   
    const [isOpen, setIsOpen]  = useState(0) 
    const  navigate = useNavigate()
    const goToEmployeeList = ()=>{
        //fermer le modal
        setIsOpen(0)
        //puis redirect
        navigate(`/employee_list`)
    }
    //Schema de validation avec yup
    const schema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        departement: yup.string().required(),
        city: yup.string().required(),
        street: yup.string().required(),
        state: yup.string().required(),
        zipCode: yup.number().required(),
        dateOfBirth: yup.date()
            .transform(value => {
            return value ? moment(value).toDate() : value;
            })
            .required("Date of Birth is required"),
        startDate: yup.date()
            .transform(value => {
            return value ? moment(value).toDate() : value;
            })
            .required("Start Date is required")
        
    }).required();

    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees)
    const { register, handleSubmit, reset, formState: { errors }, control } = useForm({mode:'onTouched', resolver: yupResolver(schema)} );

    const onSubmitForm = (data) => {
        data.id = employees.length + 1
        data.dateOfBirth = getDate(data.dateOfBirth)
        data.startDate = getDate(data.startDate)
        //add new employee to state
        dispatch(employeeAdded(data));
        //open modal confirmation
        setIsOpen(1)
    }  
    const doAddNewEmployee = () =>{
        setIsOpen(0)
        reset();
    }
    
     
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <> 
        <form onSubmit={handleSubmit(onSubmitForm)} className="form-employee">
                <div className="inputs">
                    {
                        form_inputs.map((data, index) => (
                                <fieldset key={index} aria-labelledby={data.name}>
                                    {data.name && <legend id={data.name}>{data.name}</legend>}
                                        {
                                            data.inputs.map((input, ind) => (
                                                (input.type === 'date') ?
                                                <Datepicker  key={ind} data={input}  errors={errors} control={control} />
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
                    <Link to="/employee_list" className="btn btn-outline-danger" data-cy="cancel-new-employee">Cancel</Link>
                    <button type="submit" className="btn btn-outline-success">Save</button>
                </div>
        </form>
        <Modal 
            isOpen={isOpen}
            title="Confirmation"
            width="500px"
            onClose={setIsOpen}
            modalContent={<p>New employee successfully registered</p>}
            footerContent={<><button onClick={() => doAddNewEmployee()} className="btn btn-outline-success">Add new employee</button>
            <button data-testid="modal_confirme_btn_employee_list" className="btn btn-outline-success" onClick={() =>goToEmployeeList()}>Employee List</button></>} 
            openCloseModal=""
        />
    </>
    );
}

