// 8) Programa un script que permita al usuario introducir hasta cuatro productos con los campos: nombre,
// precio y descripción. Los productos se irán almacenando en un array en el mismo orden que los
// introdujo el usuario. Una vez introducidos todos los productos (se mostrarán en la consola), se le
// preguntará al usuario que producto quiere buscar por su nombre. Si lo encuentra debe mostrar todos
// sus campos y finalmente será eliminado.

let cantidad = prompt("Cuantos prodcutos quieres introducir? maximo 4:");
let carrito = [];
for (let i = 0; i < cantidad; i++) {
    
    let nombre = prompt("Introduce el nombre del producto: ");
    let precio = prompt("Introduce el precio del producto: ");
    let descripción = prompt("Introduce la descripcion de los productos: ");

    const prodcuto = {
        nombre,precio,descripción
    };

    carrito.push(prodcuto);
};

carrito.forEach( (element,index) => {
    console.log(`producto numero:${index+1}`);
    console.log(element.nombre);
    console.log(element.precio);
    console.log(element.descripción);
});

let nombreProducto = prompt("Que producto deseas eliminar?");
carrito.forEach( (elemento,indice) => {
    if (elemento.nombre === nombreProducto) {
        carrito.splice(indice,1);
    };
});

console.log(carrito);
