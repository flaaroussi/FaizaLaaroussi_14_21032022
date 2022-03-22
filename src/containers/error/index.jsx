import { Link } from "react-router-dom";
import './style.scss'


 /**
 * @description Component for showing  error message.
 *
 * @component
 * @example
 *  <Error  />
 */
export default function Error(){
   return<main className="main-error">
     <p className="main-error__404">404</p>
         <p className="main-error__msg">Oups! La page que vous demandez n'existe pas.</p>
         <Link className="main-error__lien active" to ="/">Retourner sur la page d'acceuil</Link>
   </main>
}