// a) Introduce en un array los datos de la tabla

const tabla = [producto1 = {
    nombreProducto:"mesa",
    stock:10,
    precioUnidad:150
},producto2 = {
    nombreProducto:"Silla",
    stock:9,
    precioUnidad:45
},producto3 = {
    nombreProducto:"Taburete",
    stock:12,
    precioUnidad:30
}, producto4 = {
    nombreProducto:"Ventilador",
    stock:10,
    precioUnidad:150
}];
console.table(tabla);

// b) Comprueba que no existe ningún producto con el nombre Plato y crealo con los
// siguientes datos: nombre plato, stock 100 y precio:10€. Insértalo en la posición 3.

const verificar = tabla.filter(producto =>  producto.nombreProducto==="plato" && producto.stock===100 && producto.preciUnidad===10);
if (verificar.length === 0) {
    console.log(`no existe el objeto en el array`);
    tabla.splice(2, 0, { nombreProducto: "Plato", stock: 100, precioUnidad: 10 });
    console.log("Se ha añadido el producto 'Plato' en la posición 3.");
}else {
    console.log(`existe el objeto en el array`);
}
console.table(tabla);


// c) Comprueba que existe algún elemento con el nombre Silla.
const verificar2 = tabla.filter(producto => producto.nombreProducto === "Silla" );
if (verificar2.length > 0) {
    console.log(`existe el producto silla`);
}

// d) Muestra la posición que ocupa el producto silla


