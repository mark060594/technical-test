import { useState, useEffect } from "react";
import axios from "axios";

import Card from "./components/Card";

//Styles
const appStyles = {
  width: "1000px",
  marginLeft: "auto",
  marginRight: "auto",
};

const title = {
  fontSize: "25px",
  textAlign: "center",
};

const characterContainer = {
  padding: "20px",
};

//Instrucciones

/*  Realizar una petición a la siguiente API utilizando axios, async/await y manejando el error: https://rickandmortyapi.com/api/character
 Con el resultado de la llamada, tendremos 20 personajes. Por favor, renderizar cada uno utilizando únicamente el nombre 
 y la imagen. Utiliza el componente Card */

function App() {
  return (
    <>
      <div style={appStyles}>
        <p style={title}> Personajes </p>

        <div style={characterContainer}>
          {/* Renderizar aqui los personajes */}
        </div>
      </div>
    </>
  );
}

export default App;
