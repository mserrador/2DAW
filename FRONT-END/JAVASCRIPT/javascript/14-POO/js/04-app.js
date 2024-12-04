//COMPARACION DE objetos creados con class y mediante funciones

//veamos como crear objetos mediante class y mediante funciones
//ECMScript 5 se utilizan funciones
//ECMScript 6 se utiliza class
"use strict"


/***************************************ECMScript 5***********************/
function Animal(name){
    this.nombre=name;
};

//método
//El siguiente médoto da ERROR
//si uso función flecha heredará del padre y la propiedad nombre no la reconocerá
/* Animal.prototype.mostrarInfo= ()=> {
    console.log(`Me llamo ${this.nombre}`);
} */

Animal.prototype.mostrarInfo= function() {
    console.log(`Me llamo ${this.nombre}`);
}

let gato=new Animal("Gato");
gato.mostrarInfo();


/***************************************ECMScript 6***********************/

class Animal2 {
    constructor(name){
        this.nombre=name;
    }
    //métodos
    mostrarInformacion(){
        console.log(`Hola, soy un ${this.nombre}`);
    }
}


let gato2=new Animal2("Gatito");
gato2.mostrarInformacion();

