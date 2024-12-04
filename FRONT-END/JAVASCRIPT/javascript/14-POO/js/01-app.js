//clases
//definir
//instanciar
//constructor
//métodos
//métodos estáticos

"use strict"
//En 2015 javascript permite programar con clases
//aunque las clases son los object constructor y los métodos prototypes
//Las clases son solo una mejora del object constructor

//definir la clase, primera letra en mayúscula
class Cliente {
    constructor(nombre,saldo){ //método constructor
        this.nombre=nombre;
        this.saldo=saldo;
    }
    //método
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es ${this.saldo}`
    }
    //para mostrarlas no requiere instancias
    static bienvenido(){
        return 'Bienvenido al cajero';
    }
}

//instanciar la clase
const juan = new Cliente('juan',400);
console.log(juan);
console.log(juan.mostrarInformacion());
//puedo usar el método definido como estático sin instanciar la clase
console.log(Cliente.bienvenido());

//La siguiente linea genera un error 
//bienvenido es un método estático
//y si miro en la consola no aparece en la clase
//NO requiere una instancia, se accede directamente
//desde la clase
console.log(juan.bienvenido());



/* 
//también se puede definir
const Cliente2=class{
    constructor(nombre,saldo){
        this.nombre=nombre;
        this.saldo=saldo;
    }
     //método
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es ${this.saldo}`
    }
}
//instanciar la clase
const juan2=new Cliente2('juan',500);
console.log(juan2); */


