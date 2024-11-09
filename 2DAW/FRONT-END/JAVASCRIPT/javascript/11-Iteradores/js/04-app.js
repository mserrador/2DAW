//forEach, map
//arrow function

const array=['enero','febrero','marzo','abril'];

array.forEach(function(variable){
    console.log(variable);
})

array.forEach(variable=>console.log(variable));


//Primer parámetro "variable" es el elemento del array
//Segundo parámetro "indice" es la posición dentro del array
array.forEach(function(variable,indice){
    console.log(variable);
    console.log(indice);

})

array.forEach((variable,indice)=>{
    console.log(variable);
    console.log(indice);

})

//el indice es opcional
const array2=array.map((variable,indice)=>`${variable} ${indice}`)
console.log(array2);

const array3=array.map(variable=>`${variable}`)
console.log(array3);
