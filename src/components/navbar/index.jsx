import { NavLink } from 'react-router-dom';
import logoDesign from '../../assets/HRnet_logo-design.png';
import logoBrand from '../../assets/HRnet_logo-brand.png';
import icoCreate from '../../assets/profil-ico.jpg';
import icoList from '../../assets/list-ico.png';

import './style.scss';
import Input from '../input';




/**
 * @description component navbar
 * @component
 * 
 * @returns {Reactnode}  jsx injected in DOM
 */

export default function Navbar(){  
   return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
              <div className="nav-logo">
                <img className="nav-logo--design" src={logoDesign} alt="Wealth Health logo design" />
                <img className="nav-logo--brand"  src={logoBrand} alt="Wealth Health logo brand name" />
              </div>

              <div className="nav-menu">
                    <div>
                        <NavLink className="navbar-brand" to="/">HRNet</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <NavLink  to="/create_employee" className="nav-item">
                          <img className="nav-ico" src={icoCreate} alt="Wealth Health icone create" />   
                          <span >Create Employee</span>
                        </NavLink>

                        <NavLink to="/employee_list" className="nav-item">
                          <img className="nav-ico" src={icoList} alt="Wealth Health icone list" />
                          <span>Employee List</span>
                        </NavLink>   
                    </div>

              </div>
              
          </div>
        </nav>)
}