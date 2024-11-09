//spread operator

//utilizamos la forma declarativa (spread operator) para trabajar con el vector, es decir,
//no modifica de forma directa el objeto como lo hace de forma imperativa el push y el pop.


//imperativa modifica el objeto actual
//declarativa NO modifica el objeto actual

const carrito=[];

const producto={
    nombre:"raton",
    precio:10,
}

const producto1={
    nombre:"monitor",
    precio:100,
}

const producto2={
    nombre:"teclado",
    precio:10,
}

let resultado;

resultado=[...carrito,producto];
//carrito.push("hola"); //MUTA
resultado=[...resultado,producto2];

resultado=[producto1,...resultado];



console.log(resultado);
console.log(carrito);