
import { Fragment } from "react";
import './App.scss';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Router from "./routes/Routes";

function App (){
   return (<Fragment>
      <Navbar />  
      <Router />
      <Footer />
   </Fragment>)

}

export default App