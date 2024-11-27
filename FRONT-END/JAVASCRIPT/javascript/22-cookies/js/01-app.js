let nombre="cookie";
let valor="valor";
let expDias=2;

document.querySelector('#crear').addEventListener('click',crear);
document.querySelector('#mostrar').addEventListener('click',mostrar);
document.querySelector('#modificar').addEventListener('click',modificar);
document.querySelector('#eliminar').addEventListener('click',eliminar);

function expira(){
    let d=new Date();
    console.log(d);
    //obtenemos la fecha actual y la pasamos a milisegundos
    //expDias, almacenar el número de días que se va a almacenar la cookie

    //getTime, devuelve en milisegundos desde 1/1/1970
    console.log(d.getTime());
    //setTime, estable la fecha y hora sumando o restando en milisegundos desde 1/1/1970
    console.log(d.setTime(d.getTime()+(expDias*24*60*60*1000)));

    //toGMTString, devuelve un objeto fecha como una cadena
    let expires="expires" + d.toGMTString();
    console.log(expires);
    return expires;

}



function crear(){

    let expires=expira();

    document.cookie=(`${nombre}=${valor};${expires};path=/`);
}

function mostrar(){
    //crear un array con todas las cookies teniendo
    //en cuenta que el separador es ;
    let name=(document.cookie).split(";");
    //console.log(name);

    //devuelvo la posicíon que ocupa dentro del array
    //si no existe devuelve -1
    const indice=name.findIndex(cooke=>cooke===`${nombre}=${valor}`);
    console.log(indice);

    if (indice != -1){
        console.log(name[indice]);
        return (name[indice]);
    }else{
        return "-1";
    }
}


function modificar(){
    let existe=mostrar();

    if (existe != -1){
        let expires=expira();
        document.cookie=(`${nombre}=${valor};${expires};path=/`);
    }else{
        return "";
    }
}

function eliminar(){
    let existe=mostrar();

    //max-age, elimina la cookie
    if (existe != -1){
        document.cookie=(`${nombre}=${valor};path=/;max-age=0`);
    }else{
        return "";
    }
}


