//getItem, obtiene clave valor del localStorage

const producto={
    nombre:"raton",
    precio:50
}

//JSON.stringify, convierte el objeto a string
const resultado=JSON.stringify(producto);
localStorage.setItem('producto',resultado);

console.log(JSON.parse(localStorage.getItem('producto')));


//JSON.parse, convierte string al tipo de dato original (objeto, array,etc)
const coches=["opel","vw","mercedes"];
localStorage.setItem('coches',JSON.stringify(coches));

console.log(JSON.parse(localStorage.getItem('coches')));