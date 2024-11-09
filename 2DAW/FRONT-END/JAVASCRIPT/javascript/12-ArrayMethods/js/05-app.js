//find, devuelve el primer elemento
//que encuentra

const carrito=[
    {nombre:"raton" ,precio:10, oferta:true},
    {nombre:"teclado" ,precio:15, oferta:true },
    {nombre:"monitor" ,precio:200, oferta:false },
    {nombre:"mesa" ,precio:250, oferta:true },
]

const resultado=carrito.find(producto=>producto.precio<200);
console.log(resultado);

