import React from "react";
import Links from "./components/Links";
import Formulario from "./components/Formulario";
import Galeria from "./components/Galeria"

import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container p-4">             
        <div className="row contenedor1">                
          <Links />
        </div>      
          <div className="row contenedor1">
            <Formulario />
        </div>              
        <div className="row ">
            <Galeria />
        </div>              
      <ToastContainer />
    </div>
  );
}

export default App;
