//iterar un array
//foreach, map, for


const meses=["enero","febreo","marzo","abril"];

for (let i=0;i<meses.length;i++){
    console.log(meses[i]);
}


//vamos a recorrer un array de objetos
const carrito=[
    {nombre:"juan", edad:40},
    {nombre:"ana", edad:20},
    {nombre:"felipe", edad:34},
    {nombre:"manuel", edad:10}
]

for (let i=0;i<carrito.length;i++){
    console.log(carrito[i].edad);
}

//foreach
carrito.forEach( function(producto){
    let incremento=parseInt(producto.edad) +2;
    console.log(`${producto.nombre} Edad: ${incremento}`);
})

//map, es similar al foreach pero devuelve un array
//callback es llamar a una función como parámetro 
//de otra función map recibe como parámetro 
//una función con la que irá iterando sobre los elementos del array
let carritoAux=carrito.map( function(producto){
    let incremento=parseInt(producto.edad) +2;
    //console.log(`${producto.nombre} Edad: ${incremento}`);
    return (`${producto.nombre} Edad: ${incremento}`);
})


console.log(carritoAux);
