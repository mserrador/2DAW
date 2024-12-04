//propiedades privadas
//atributos privados, solo se accede desde dentro de la clase
//atriubtos publicos, acceso desde fuera

"use strict"
//definir la clase
class Cliente {
    #nombre; //definición de atributo privado
    constructor(nombre,saldo){
        this.#nombre=nombre;
        this.saldo=saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es ${this.saldo}`
    }
    //para mostrarlas no requiere instancias
    static bienvenido(){
        return 'Bienvenido al cajero';
    }
}
const juan=new Cliente('juan',200);
//acceso a atributo público
console.log(juan.saldo);
//acceso a atributo privado. Da ERROR:
//console.log(juan.#nombre);
console.log(juan.mostrarInformacion());

console.log(juan);


//OTRA FORMA de acceder a los atributos privados
class Cliente2 {
    #nombre; //definición de atributo privado
    
    setNombre(nombre){
        this.#nombre=nombre;
    }

    getNombres(){
        return this.#nombre;
    }
   
}

const pepe=new Cliente2();
pepe.setNombre('pepe');
console.log(pepe.getNombres()); 

//La siguiente linea genera ERROR:
//console.log(pepe.#nombre);

