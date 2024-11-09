//alcance arrow function


//this tiene su propio alcance
//genera un error porque
//las funciones habituales no bloquean el alcance

const objeto={
    nombre:["juan","Rosa","francisco","Manuel"],
    print: function(delay=1000){
        setTimeout(function(){
            console.log(this);
            console.log(this.nombre.join(","));
        },delay)
    }
}

objeto.print();

//Las funciones heredan el alcance del padre, y por este motivo,
//protegen o limitan el alcance de this
const objeto1={
    nombre:["juan","Rosa","francisco","Manuel"],
    print: function(delay=1000){
        setTimeout(()=>{
            console.log(this);
            console.log(this.nombre.join(","));
        },delay)
    }
}

objeto1.print();


//no funciona
//this va a heredar del padre que será window
const objeto2={
    nombre:["juan","Rosa","francisco","Manuel"],
    print: (delay=1000)=>{
        setTimeout(()=>{
            console.log(this);
            console.log(this.nombre.join(","));
        },delay)
    }
}

objeto2.print();