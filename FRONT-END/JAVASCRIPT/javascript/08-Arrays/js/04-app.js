//destructuring array

const producto={
    nombre:"monitor",
    precio: 150,
    disponible:true,
}

const {nombre,precio: p, disponible}=producto;

console.log(nombre);
console.log(p);

//vamos a verlo con los vector

const numeros=[10,20,30,50];

const [a,b]=numeros; //destructurin devuelve los dos primeros valores
console.log(a);
console.log(b);

const [,,,cuarto]=numeros; //devuelve el cuarto elemento del vector
console.log(cuarto);

//operador spread
const [a1,b1,...resto]=numeros;
console.log(resto);






