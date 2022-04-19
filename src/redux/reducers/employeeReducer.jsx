import { ADD_EMPLOYEE } from "../actions/actionsTypes";
import { initialState } from "../initialState/intialState";

/**
 * reducer qui modifie les states : authentification de l'utilisateur et  update du profil
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */

 const employeeReducer = (state = initialState, action) => {
   console.log(action)
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