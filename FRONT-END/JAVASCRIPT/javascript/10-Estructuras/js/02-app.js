//operador mayor o menor que
// mayor >
// menor <
// mayor o igual  >=
// menor o igual <=
// veamos el else if

const ahorro=1000;
const compra=1500;
const credito=true;

if(ahorro >= compra){ 
    console.log("Puedes comprar")
}else{
    console.log("No puedes comprar")
}

//VEAMOS EL else if
console.log("veamos el ELSE IF");
if(ahorro >= compra){ 
    console.log("Puedes comprar")
}else if (credito){
    console.log("Puedes comprar porque tienes crédito")
}else{
    console.log("No puedes comprar");
}

