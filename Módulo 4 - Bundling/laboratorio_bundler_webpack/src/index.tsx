import React from "react";
import { createRoot } from "react-dom/client";
import "./mystyles.scss";
import logo from "./content/logprogramadora.png";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className="cadetblue-background">Hola desde React DOM</h1>
    <p className="entorno-background">{process.env.ENTORNO}</p>
    <img src={logo} />
  </div>
);

/*const a: number = "this is a string";*/
