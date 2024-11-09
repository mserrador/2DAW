//clousures, te da acceso al alcance de una función externa
//desde una función interna
//En Javascript, los clousures se crean cada vez que se
//crea una función, en el momento de la creación de misma.

//En javascript las funciones son objetos

const saludo=function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludo("juan","garcia");
saludo();



//veamos una función dentro de otra
const numeroGlobal=1;
function global(){
    const numeroFuncion=2;
    function local(){
        const numeroFuncionLocal=3;
        return numeroGlobal + numeroFuncion + numeroFuncionLocal;
    }
    return local; //devuelve la referencia de la función
}

console.log(   global()   );
console.log(   global()()  );

//vamos a ver ahora clousure
//vamos a poner entre parentesis la función
//ejemplo:

const contador=( function(){
    let valor=0;

    function incrementar(){
        return valor++;
    }
    function decrementar(){
        return valor--;
    }

    function valorActual(){
        return valor;
    }


    return{
        incrementar: incrementar,
        decrementar: decrementar,
        valorActual,
    }
} )() //con el operador () lo ejecuto. Esto es un clousure

contador.incrementar();
contador.incrementar();
console.log(contador.valorActual());
contador.decrementar();
console.log(contador.valorActual());




