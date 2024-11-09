//arrow function con foreach y map

const carrito=[
    {nombre:"monitor", precio:40},
    {nombre:"raton", precio:20},
    {nombre:"mesa", precio:34},
    {nombre:"silla", precio:10}
]

const mostrarCarrito=carrito.map(producto=>`${producto.nombre} ${producto.precio}`);
const mostrarCarrito2=carrito.map(producto=>(producto));

console.log(mostrarCarrito);
console.log(mostrarCarrito2);

//aplico destructuring dentro de un foreach
carrito.forEach(({precio}=producto)=>console.log(precio));




