import { ADD_EMPLOYEE } from "../actions/actionsTypes";
import { initialState } from "../initialState/intialState";

/**
 * reducer qui modifie le state initial :  update de la liste des employee
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */

 const employeeReducer = (state = initialState, action) => {
      switch(action.type){
         case ADD_EMPLOYEE:
            {
               return {
                  ...state, 
                  employees : [...state.employees, action.payload]
               }
            }       
            default : 
            return state
      }
}

export default employeeReducer