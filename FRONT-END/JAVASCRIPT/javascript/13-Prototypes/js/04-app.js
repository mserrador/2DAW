//veamos como heredar con prototypes
//y así poder reutilizar métodos

function Cliente(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo;
}


const federico=new Cliente ("federico",500);
console.log(federico);

Cliente.prototype.tipoCliente= function(){
    let tipo;

    if (this.saldo > 10000){
        tipo= "Gold";
    }else{
        tipo= "Silver";
    }
    return tipo;
}

Cliente.prototype.mostrarCliente=function(){
    return `Nombre: ${this.nombre} Saldo: ${this.saldo} Tipo: ${this.tipoCliente() }`
 }

 Cliente.prototype.restarSaldo =function(sacar){
    this.saldo -= (sacar);
 }

 federico.restarSaldo(2);
 console.log(federico.mostrarCliente());


/*********************************/
//veamos un objeto que va a a tener en común
//los atributos saldo y nombre
//entonces vamos a heredar
function Persona(nombre,saldo,telefono){
    Cliente.call(this,nombre,saldo); //heredamos utilizando el método call
    this.telefono=telefono;
}


//heredar métodos
//mirar en la consola como aparecen
//los métodos heredados de Cliente
//Antes de instanciar el objeto, se debe de heredar
Persona.prototype=Object.create(Cliente.prototype);

//¿como puedo heredar el constructor de persona?
Persona.prototype.constructor=Cliente;

//instanciar
const pepe=new Persona("pepe",5000,666898989)
console.log(pepe);

//una vez que heredo puedo utilizar los métodos
console.log(pepe.mostrarCliente());

//vamos a crear un prototype de persona
Persona.prototype.mostrarTelefono=function(){
    return `El telefono es ${this.telefono}`
}

console.log(pepe.mostrarTelefono());

console.log(pepe);
console.log(pepe.__proto__);
console.log(pepe.__proto__.__proto__);
console.log(pepe.__proto__.__proto__.__proto__);