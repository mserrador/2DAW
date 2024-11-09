//funciones flecha
//arrow functions


//expresión de una función
const objeto=function(){
    console.log("objeto");
}

//primera modificación
const objeto1=()=>{
    console.log("objeto");
}

//segunda modificación, si solo devuelvo una línea
//me ahorro las llaves
const objeto2=()=>console.log("objeto");

const objeto3=()=>"objeto3";

console.log(objeto3());


//vamos a pasar parámetros
const objeto4=(nombre, version)=>`Estoy aprendiendo ${nombre} ${version}`;

console.log(objeto4("javascript","es6"));








