//reduce
//Aplica una función a cada una de los elementos del array
//y devuelve un valor único

const carrito=[
    {nombre:"raton" ,precio:10 },
    {nombre:"teclado" ,precio:15 },
    {nombre:"monitor" ,precio:200 },
    {nombre:"mesa" ,precio:250 },
]

//Se pasan dos parámetros
//Primer parámetro es un acumulador y el elemento del array
//Segundo parámetro es el valor inicial

//ejemplo con dos parámetros
let resultado=carrito.reduce((total,producto)=>total + producto.precio,20);
console.log(resultado);


