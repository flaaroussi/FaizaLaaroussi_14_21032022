import { 
   ADD_EMPLOYEE
   
} from "./actionsTypes"

/**
 * Action qui modifie le state new employee
 * @param {*} new employee 
 * @returns 
 */
export const employeeAdded = (newEmployee)=>({
   type: ADD_EMPLOYEE,
   payload: newEmployee  
})

