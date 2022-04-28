import { NavLink } from 'react-router-dom';

import logoDesign from '../../assets/geiDy801.svg';
import logoBrand from '../../assets/fc7GKB01.svg';


import './style.scss';

/**
 * @description component navbar
 * @component
 * 
 * @returns {Reactnode}  jsx injected in DOM
 */

export default function Navbar(){  
   return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-blanc" aria-labelledby='nav'>
          <div className="container-fluid">
              <NavLink to = "/employee_list" className="nav-logo" aria-label="nav-logo">
                <img className="nav-logo--design" src={logoDesign} alt="Wealth Health logo design" />
                <img className="nav-logo--brand"  src={logoBrand} alt="Wealth Health logo brand name" />
              </NavLink>
              <div className="nav-menu">
                    HRNet
              </div>              
          </div>
        </nav>)
}