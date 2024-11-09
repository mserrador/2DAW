//otro ejemplo de callback y su equivalente mediante promes

function multiplica(a,b){
    console.log(a*b);
}

const calcula=(num1,num2,callback)=>{
    callback(num1,num2);
}

calcula(1,2,multiplica);


//¿Cómo sería su equivalente mediante un promise?
const calcula2 = (a,b) => {
    const resultado=a+b;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(resultado);
        },2000)    
    })
}

calcula2(2,3)
    .then(resultado=>console.log(resultado));
    


//otra forma de escribir la promesa
const calcula3=(num1,num2)=>new Promise ((resolve,reject)=>{
    const resultado=a+b;
    setTimeout(()=>{
        resolve(resultado);
    },2000)    
    
})

calcula3(1,2)
    .then(resultado=>console.log(resultado));


