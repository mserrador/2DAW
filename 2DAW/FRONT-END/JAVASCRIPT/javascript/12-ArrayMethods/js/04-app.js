//metodo filter
//devuelve todos los elementos que cumplen la
//condición

const carrito=[
    {nombre:"raton" ,precio:10, oferta:true},
    {nombre:"teclado" ,precio:15, oferta:true },
    {nombre:"monitor" ,precio:200, oferta:false },
    {nombre:"mesa" ,precio:250, oferta:true },
]


let resultado=carrito.filter(producto=>producto.oferta==true);
console.log(resultado);


let resultado2=carrito.filter(({oferta})=>oferta==true);
console.log(resultado2);

