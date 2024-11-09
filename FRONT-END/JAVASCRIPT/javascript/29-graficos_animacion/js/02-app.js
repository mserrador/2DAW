//obtener informacion del empleados.json

const cargarJsonBtn=document.querySelector('#cargarJSON');

cargarJsonBtn.addEventListener('click',obtenerDatos);


function obtenerDatos(){
    const url="data/empleados.json";

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
            mostrarDatos(datos);
        })
        .catch(error=>{
            console.log(error);
        })  
}

function mostrarDatos({id,nombre,empresa,trabajo}){
    const contenido=document.querySelector('#contenido');
    
    contenido.innerHTML=`
        <p> id: ${id}</p>
        <p> nombre: ${nombre}</p>
        <p> empresa: ${empresa}</p>
        <p> trabajo: ${trabajo}</p>

    `
}