// getItem, obtiene el valor del del localstorage

const producto={
    nombre:"raton",
    precio:50
}

// JSON.stringify convierte el objeto a String
const resultado = JSON.stringify(producto);
localStorage.setItem('producto',resultado);

console.log(JSON.parse(localStorage.getItem('producto')));

// JSON.parse, convierte a string al tipo de dato original (objeto, array)
const coches=["opel","volkswagen","mercedes"];
localStorage.setItem('coches',JSON.stringify(coches));

console.log(JSON.parse(localStorage.getItem('coches')));
