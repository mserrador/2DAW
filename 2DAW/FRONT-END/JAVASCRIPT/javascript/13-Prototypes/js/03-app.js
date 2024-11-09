//veamos como crear los prototypes
//también se pueden empezar a crear clases que es
//muy similar a los prototypes

//partiendo del objeto creado en 01-app.js
//creo el objeto
function Cliente(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo;
}

//instancio el objeto
const federico=new Cliente ("federico",500);
console.log(federico);

//si voy a la consola y expando el objeto
//se ve que hay un prototype que es el constructor

//¿Cómo agregar más funciones o métodos al objeto?
//No se puede utilizar array function
//pq array function no busca sobre el mismo objeto
//sino en la ventana global
Cliente.prototype.tipoCliente= function(){
    //console.log("desde mi nuevo proto")
    //console.log(this.saldo);
    let tipo;

    if (this.saldo > 10000){
        tipo= "Gold";
    }else{
        tipo= "Silver";
    }
    return tipo;
}
//acceder al nuevo metodo
//federico.tipoCliente();
console.log( federico.tipoCliente() );

//creamos otro prototype
//para ver como se llama un prototype dentro de otro prototype
//en los prototypes no se utiliza arrow function si dentro
//vamos a hacer referencia al objeto con this
Cliente.prototype.mostrarCliente=function(){
    return `Nombre: ${this.nombre} Saldo: ${this.saldo} Tipo: ${this.tipoCliente() }`
 }

 console.log(federico.mostrarCliente());

 //otro prototype
 Cliente.prototype.restarSaldo =function(sacar){
    this.saldo -= sacar;
 }

 federico.restarSaldo(20);
 console.log(federico.mostrarCliente());

 //creo un metodo en el object constructor
 //para que las instancias de cliente
 //en este caso federcio puede acceder a la 
 //funcion infoCliente
 Object.prototype.info=function(){
    return `El cliente es: ${this.nombre}`;
 }

 console.log(federico.info());

//CREO OTRO OBJETO llamado Empresa
 function Empresa(nombre,saldo,categoria){
    this.nombre=nombre;
    this.saldo=saldo;
    this.categoria=categoria;
}

//instancio el objeto
//Si creo un objeto nuevo, los métodos creados
//para el objeto Cliente no estan accesibles
//para empresa, en cambio, el prototype info
//del object constructor si esta disponible
//para los nuevos objetos
const laSA=new Empresa ("La tienda",50000,"cursos Javascript");
console.log(laSA);

console.log(laSA.info());