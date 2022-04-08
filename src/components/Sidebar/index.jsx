import './style.scss';

import { NavLink } from "react-router-dom";

/**
 * @description Component for showing side bar navigation.
 *
 * @component
 * @example
 * return(
 *  <Sidebar  />
 * )
 */

function Sidebar (){
   return(<aside className="sidebar">
      <nav className='nav'>
         <NavLink to = "/employee_list" className="nav__item">
            <i className="fas fa-user-friends"></i>
            <div>Employees</div>
         </NavLink>
      </nav>
   </aside>)
}

export default Sidebar