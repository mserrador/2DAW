//concat y spread

const meses1=["enero","febreo"];
const meses2=["marzo","abril"];
const meses3=["mayo","junio"];


const resultado=meses1.concat(meses2,meses3,"julio");
console.log(resultado);

const result2=[...meses1,...meses2,...meses3,"julio"];
console.log(result2);