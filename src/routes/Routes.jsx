import { Routes, Route} from "react-router-dom";
import CreateEmployee from "../containers/create_employee";
import Error from "../containers/error";
import Home from "../containers/home";
import ListEmployee from "../containers/list_employee";


/** 
 * Routes application
 * @returns {objet} 
 */

export default function Router(){

   return <Routes>  
            <Route path="/employee_list" element={<ListEmployee exact="true"/>} />
            <Route path="/create_employee" element={<CreateEmployee />} />
            <Route path="/employee_list" element={<ListEmployee />} />
            <Route path="*" element={<Error />}  />
   </Routes>
   
}  