//spread

const meses1=["enero","febreo","marzo","abril","mayo"];

meses1.push("junio");
console.log(meses1);

const meses2=[...meses1,"julio"];
console.log(meses2);

const carrito=[
    {nombre:"raton" ,precio:10, oferta:true},
    {nombre:"teclado" ,precio:15, oferta:true },
    {nombre:"monitor" ,precio:200, oferta:false },
    {nombre:"mesa" ,precio:250, oferta:true },
]

const producto={
    nombre:"silla",
    precio:60,
    oferta:false,
}

const carrito2=[...carrito,producto];
console.log(carrito2);

const carrito3=[producto,...carrito];
console.log(carrito3);