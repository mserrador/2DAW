//callback, es función que se pasa a otra función como parámtro
//que luego se invoca dentro de la fucnión externa para completar
//algún tipo de rutina o acción
//Se utiliza en JS para crear funciones asíncronas

function mostrar(texto){
    document.querySelector("#demo").textContent=texto;
}

function suma(num1,num2,myCallback){
    let sum=num1 + num2;
    myCallback(sum);
}

suma(1,2,mostrar);


//otro ejemplo
const arrayNumeros=[300,4,-2,20,-1,8-20];


function mayorCero(x){
    return x>=0;
}

function eliminarNumerosNegativos(arrayNumeros,callback){
    const auxArray=[];
    for (const x of arrayNumeros){
        if (callback(x)){
            auxArray.push(x);
        }
    }
    return auxArray;
}

//eliminarNumerosNegativos(arrayNumeros,mayorCero);

document.querySelector('#demo2').textContent=eliminarNumerosNegativos(arrayNumeros,mayorCero);