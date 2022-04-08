import Form from '../../components/form';
import './style.scss';

import { useEffect } from 'react';

/**
 * @description render page
 * @component
 * 
 * @returns 
 */

export default function CreateEmployee(){
   useEffect(() => {    
      document.title = `HRnet - Create employee `
      }, []);

   return(<main className="main">  
   <div className='bloc'> 
      <div className='header'>
         <div className='title'>Add a new employee</div> 
      </div>
      <div className='body'>
         <Form />
      </div>
   </div> 
   </main>)
}