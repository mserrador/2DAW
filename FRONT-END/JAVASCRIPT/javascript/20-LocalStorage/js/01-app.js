//localStorage.setItem
//setItem, agregar elementos (clave, valor)
//el valor que almacena es de tipo string 
//NO almacena ni objetos, ni arrays, etc....

//localStorage pertenece a la ventana window
//se puede llamar de dos formas
//window.localstorage
//localstorage

//localStorage: mantiene la información aún cerrando el navegador

//sesionStorage: los datos NO se mantienen después de cerrar el navegador

localStorage.setItem('producto2','mesa');

const producto={
    nombre:"raton",
    precio:50
}

//JSON.stringify, convierte el objeto a string
const resultado=JSON.stringify(producto);
//console.log(resultado);
//console.log(producto);

localStorage.setItem('producto',resultado);

const coches=["opel","vw","mercedes"];
localStorage.setItem('coches',JSON.stringify(coches));


