
function inputNumber(num){
    return new Promise((resolve,reject)=>{
        if (typeof(num)=="number"){
            setTimeout(()=>{
                resolve(num);
            },2000)
        }else{
            reject("No has introducido un número");
        }
    })
}

inputNumber(5)
    .then(resultado=>{
        console.log(resultado);
        //return 2 * resultado;
        return inputNumber(20);
    })
    .then(resultado=>{
        console.log(resultado);
        return 2 * resultado;
    })
    .then(resultado=>{
        console.log(resultado);
        return 2 * resultado;
    })
    .catch(error=>{
        console.log(error);
    })