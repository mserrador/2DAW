//setTimeout, ejecuta una función pasado un tiempo
//clearTimeout

//setInterval, ejecuta función cada cierto tiempo
//clearInterval,
const idSetTimeout=setTimeout(saluda,2000,"pepe","garcia");

const idSetInterval=setInterval(saluda2,1000);

//clearInterval(idSetInterval); //para la ejecución

function saluda(nombre,apellido){
    console.log(`hola ${nombre} ${apellido}`);
}

function saluda2(){
    console.log("hola");
}