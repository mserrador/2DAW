// localStorage.setItem
// setItem Agragar elementos (clave,valor)
// el valor que almacena es de tipo String
// No almacena ni objetos ni arrays etc


// localStorage pertenece a la ventana window
// se le puede invocar de dos formas
// window.localStorage
// localStorage

// Mantiene la informacion aun cerrando el navegador

// sesionStorage: los datos no se mantienen despues de cerrar el navegador

localStorage.setItem('producto','mesa');
const producto={
    nombre:"raton",
    precio:50
}

// JSON.stringify convierte el objeto a String
const resultado = JSON.stringify(producto);
console.log(resultado);

localStorage.setItem('producto',resultado);

const coches=["opel","volkswagen","mercedes"];
localStorage.setItem('coches',coches);
