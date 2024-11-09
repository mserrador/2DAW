//return (solo funciona dentro de las funciones)

const record=500;

//el siguiente código genera ERROR
//el return solo funciona dentro de las funciones

/* if (record>400){
    console.log('Excelente');
    return; //finaliza la función
}
if (record>300){
    console.log('Sigue así...');
    return;
} */

function revisarRecord(){
    if (record>400){
        console.log('Excelente');
        return; //finaliza la función
    }
    if (record>300){
        console.log('Sigue así...');
        return;
    }
}

revisarRecord();