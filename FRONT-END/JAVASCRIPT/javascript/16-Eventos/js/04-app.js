//validar un formulario
//preventDefault, evita el comportamiento por defecto de un formulario

const formulario=document.querySelector('#formulario');

formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault(); //evita el comportamiento por defecto
    console.log(evento);
    console.log(evento.target.method);
    console.log(evento.target.action);
}) 

//otra forma de pasar la función a addEventListener
//No se le pasa a la función validar el evento pq addEventlister
//ya se encarga de buscarlo aunque no se le pase como parámetro
formulario.addEventListener('submit', validar);


function validar(evento){
    evento.preventDefault(); //evita el comportamiento por defecto
    console.log(evento);
    console.log(evento.target.method);
    console.log(evento.target.action);
}
