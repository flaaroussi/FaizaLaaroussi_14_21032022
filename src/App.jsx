
import { Fragment } from "react";
import './App.scss';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Router from "./routes/Routes";
import Sidebar from "./components/Sidebar";

function App (){
   return (<Fragment>
      <Navbar />  
      <Sidebar />
      <Router />
      <Footer />
   </Fragment>)

}

export default App