import logoDesign from '../../assets/HRnet_logo-design.png';
import logoBrand from '../../assets/HRnet_logo-brand.png';
import './style.scss';
import { NavLink } from 'react-router-dom';




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
              <NavLink to = "/create_employee" className="nav-logo" aria-label="nav-logo">
                <img className="nav-logo--design" src={logoDesign} alt="Wealth Health logo design" />
                <img className="nav-logo--brand"  src={logoBrand} alt="Wealth Health logo brand name" />
              </NavLink>
              <div className="nav-menu">
                    <a>HRNet</a>
              </div>              
          </div>
        </nav>)
}