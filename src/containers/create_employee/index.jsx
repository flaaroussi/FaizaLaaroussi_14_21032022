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
   <h2 className='page-title'> Add a new employee  </h2> 
    <Form />
   </main>)
}