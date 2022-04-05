import { 
   ADD_EMPLOYEE
   
} from "./actionsTypes"

/**
 * Action qui modifie le state token
 * @param {*} token 
 * @returns 
 */
export const employeeAdded = (newEmployee)=>({
   type: ADD_EMPLOYEE,
   payload: newEmployee  
})

