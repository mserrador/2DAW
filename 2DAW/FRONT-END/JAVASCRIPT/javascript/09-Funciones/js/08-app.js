//arrow function con las propiedades de un objeto
//set añade una propiedad al objeto
//get permiter información de la propiedad del objeto
"use strict"

const reproductor={
    cancion:'',

    reproducir: id => console.log(`Reproduciendo la cancion ${id}`),

    pausar: ()=>console.log(`pausando`),

    creaLista: nombre=>console.log(`Creando la lista ${nombre}`),

    //crear una nueva propiedad
    set nuevaCancion(cancion){
        this.cancion=cancion;
        console.log(`Añadiendo la cancion ${cancion}`)
    },

    //obtener información de una propiedad
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}


reproductor.nuevaCancion="Música ochentera"; //no se usan paréntesis pq es una propiedad y no un método

reproductor.obtenerCancion; //No hace falta paréntesis

reproductor.creaLista('Musica actual');
reproductor.reproducir(30);
console.log(reproductor);