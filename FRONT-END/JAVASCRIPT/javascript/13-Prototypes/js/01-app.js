//prototype
//Los prototypes estan muy relacionados con los objetos
//de forma que todos los objetos tiene un prototype


//Breve Aclaración: 
    //En javascript no se podía programar con clases hasta 2015
    //Para crear objetos se utilizaban funciones
    //y con la propiedad prototype se crean los métodos de la función
    //Ahora se utiliza la palabra reservada class para crear las clases
    //Se verá un ejemplo más adelante 
    //Enlace con un buen ejemplo donde se explica la


//existen dos formas de crear objetos en javascript:
//OBJETO LITERAL (más estático)
//no permite crear instancias
const cliente = {
    nombre: "juan",
    saldo: 500
}
//veamos en la consola el proto
console.log(cliente);
console.log(typeof(cliente));

//OBJETO REUTILIZABLE (más dinámico)
//puedo crear más instancias
//el OBJECT CONSTRUCTOR es el siguiente:
function Cliente(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo;
}

const juan=new Cliente ("juan",500);
console.log(juan);


//Si miramos en la consola, vemos
//que cada objeto que se crea tiene un proto

