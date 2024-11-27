//Propiedad key

function reconoceTecla(e){
    let tecla=e.key;
    console.log(`Has pulsado la tecla ${tecla}`);
}

document.addEventListener("keydown",reconoceTecla);

