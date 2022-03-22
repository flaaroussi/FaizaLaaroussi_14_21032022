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
            <Route path="/" element={<Home exact="true"/>} />
           
            <Route path="/create_employee" element={<CreateEmployee />} />

            <Route path="/list_employee" element={<ListEmployee />} />
           
            <Route path="*" element={<Error />}  />
            
   </Routes>
   
}  