/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuses").innerHTML = generateExcuses();
  });
  console.log("Hello Rigo from the console");
};

let generateExcuses = () => {
  let pronoun = ["Yo", "Ellos", "Nosotros", "Ustedes"];
  let subject = ["Piloto", "Doctor", "Ardilla", "Cama"];
  let action = [
    "Respirar",
    "Ya tengo el bolso",
    "Acostado en el mueble",
    "Deporte"
  ];
  let posseition = ["vehículo", "Hogar", "Refugio", "Estanque"];
  let where = ["en la avenida", "en el trabajo", "en la calle", "en el piso"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let posseitionIndx = Math.floor(Math.random() * posseition.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actionIndx] +
    " " +
    posseition[posseitionIndx] +
    " " +
    where[whereIndx]
  );
};
