//requestAnimationFrame
//La frecuencia de las llamadass a la función que se devuelve coincide
//con la frecuencia a la que trabaja el monitor

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_requestanimationframe

const animar=()=>{
    requestAnimationFrame(animar);
    pintarRectangulo();
}

window.onload=()=>{
    animar();
}