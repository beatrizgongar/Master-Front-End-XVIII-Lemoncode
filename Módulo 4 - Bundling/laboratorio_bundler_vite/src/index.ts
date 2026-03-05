import mystyles from "./mystyles.module.css";

// Crear elementos usando la API del DOM
const titleElement = document.createElement("h1");
const entornoElement = document.createElement("p");

// Asignar las clases únicas generadas por Vite
titleElement.className = mystyles.title;
entornoElement.className = mystyles.entorno;

// Añadir contenido de texto
titleElement.textContent = "Hola Vite con CSS Modules y DOM API";
entornoElement.textContent = "El entorno es " + import.meta.env.VITE_ENTORNO;

// Adjuntar al DOM
document.body.appendChild(titleElement);
document.body.appendChild(entornoElement);

const user = "Juan Doe";
console.log(`Hola ${user}!`);

const numberA: number = 2;
const numberB: number = 3;
console.log(numberA + numberB);
