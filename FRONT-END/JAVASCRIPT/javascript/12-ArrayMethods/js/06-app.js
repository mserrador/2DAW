//every,

//devuelve true si todos
//los elementos cumplen la condición

const carrito=[
    {nombre:"raton" ,precio:10, oferta:true},
    {nombre:"teclado" ,precio:15, oferta:true },
    {nombre:"monitor" ,precio:200, oferta:false },
    {nombre:"mesa" ,precio:250, oferta:true },
]

const resultado=carrito.every(producto=>producto.precio<30);
console.log(resultado);