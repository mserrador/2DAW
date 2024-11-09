//obtener informacion del empleados.json

const cargarJsonBtn=document.querySelector('#cargarAPI');

cargarJsonBtn.addEventListener('click',obtenerDatos);


function obtenerDatos(){
    const url="https://picsum.photos/list";

    //fetch ya tiene el resolve y el reject implicito. No hay que difinir la promesa
    //
    fetch(url)
        .then (respuesta=>{
            console.log(respuesta);
            console.log(respuesta.ok);
            console.log(respuesta.status);
            return respuesta.json();
        })
         .then (datos=>{
            console.log(datos);
            //mostrarDatos(datos);
        })
        .catch(error=>{
            console.log(error);
        })  
}
