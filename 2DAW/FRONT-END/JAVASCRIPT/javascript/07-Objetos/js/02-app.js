//Crear un objeto dentro de otro. DESTRUCTURING


//Objeto Literal
const producto={
    nombre:"decodificador",
    precio:200,
    disponible:true,
    informacion:{
        medidas:"4m",
        peso:"1000kg",
    }
}

console.log(producto.nombre);
console.log(producto.informacion.peso);
console.log(producto['informacion']['medidas']);


//Destructuring
const {precio}=producto;
const {nombre: n}=producto;
console.log(precio);
console.log(n);

const {informacion: info}=producto;
console.log(info);


const {informacion: {medidas: m}}=producto;
console.log(m);

//crear un objeto a partir de una propiedad
//Se usará mucho en REACT
const persona={
    nombre:"Felipe",
    apellido:"García",
    edad:25,
}

console.log(persona);


//Se crea un nuevo objeto con una propiedad llamada persona que se le 
//asigna el objeto persona creado anteriormente
console.log({persona:persona}); //Se usará mucho en REACT
//Cuando la propiedad se llama igual al valor que se le asigna, se puede
//escribir así:
console.log({persona});

//¿Cómo accedo a los campos del objeto?
console.log({persona});
console.log({persona}.persona); //muestro el contenido del atributo persona del objeto persona

console.log({persona}.persona.nombre); //muestro el contenido del atributo nombre








