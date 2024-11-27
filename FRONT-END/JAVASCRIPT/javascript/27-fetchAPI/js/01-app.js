//con fetch API se pueden enviar o recibir datos

//vamos a ver como recibir datos desde un fichero de texto
const cargarTxtBtn=document.querySelector('#cargarTXT');

cargarTxtBtn.addEventListener('click',obtenerDatos);


function obtenerDatos(){
    const url="data/datos.txt";

    //fetch ya tiene el resolve y el reject implicito. No hay que difinir la promesa
    //
    fetch(url)
        .then (respuesta=>{
            console.log(respuesta);
            console.log(respuesta.ok);
            console.log(respuesta.status);
            return respuesta.text();
        })
         .then (datos=>{
            console.log(datos);
        })
        .catch(error=>{
            console.log(error);
        })  
}