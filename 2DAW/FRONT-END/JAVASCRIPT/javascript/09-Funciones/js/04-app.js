//parámetros por defecto



function saludos(nombre,apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludos("pepe"); //al no parsarle el segundo parámetro me devuvelve undefined

//Parametro por defecto
function saludos1(nombre,apellido="garcia"){
    console.log(`Hola ${nombre} ${apellido}`);
}
saludos1("pepe");