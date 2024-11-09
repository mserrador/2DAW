//DOMContentLoaded, evento que se ejecuta cuando el código html esta totalmente interpretado por le navegador


console.log("hola");

//addEventListener es un controlador de eventos,
//se le pasa como primer parámetro el evento y como segundo una función
document.addEventListener("DOMContentLoaded",()=>{
    console.log("documento listo");
})


console.log("ultima linea");

/* window.onload=function(){
    console.log("onload");
} */