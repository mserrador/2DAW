/*
1) Crea un array de objetos (de forma literal) que contendrá 5 coches. De cada coche se guardará la
siguiente información: nombre, color y precio (tres coches tendrán un precio superior a 30.000€ y
dos coches con un precio inferior a 25.000€). Ten en cuenta lo siguiente:
a) Tienes que usar los siguientes métodos: pop, push, shift, unshift y splice
b) No olvides mostrar el contenido del array en cada caso utilizando console.table.
c) Inserta tres coches al principio del array
d) Inserta dos coches al final del array
e) Borra los coches que están en la posición 3 y 4 del array
f) Inserta uno de los coches borrados en la posición 2.
g) Inserta el coche que falta (lo eliminaste en el paso e) en la posición 1 del array.
h) Muestra en cada caso como se va modificando el contenido del array
i) Crea dos arrays llamado cochesCaros (precio superior a 30.000€) y cochesBaratos (precio
inferior a 25.000€). No utilices for ni foreach.
j) Haciendo un destructuring, obtén los dos últimos elementos del array principal (el que contiene
los cinco coches).
*/ 

const coches = [
coche1 = {
    nombre:"BMW",
    color:"negro",
    precio:80000
},coche2 = {
    nombre:"MERCEDES",
    color:"blanco",
    precio:60000
},coche3 = {
    nombre:"AUDI",
    color:"gris",
    precio:120000
},coche4 = {
    nombre:"RENAULT",
    color:"verde",
    precio:25000
},coche5 = {
    nombre:"SEAT",
    color:"amarillo",
    precio:15000
}];
console.log(`array original:`);
console.table(coches);

// c)
const cochesc = coches;
cochesc.unshift(coche6 = {nombre:"FORD",color:"lila",precio:35000});
cochesc.unshift(coche7 = {nombre:"DACIA",color:"azul oscuro",precio:10000});
cochesc.unshift(coche8 = {nombre:"M4 COMPETITION",color:"negro",precio:130000});
console.log(`a;adimos 3 coches al principio:`);
console.table(cochesc);

// d)
const cochesd = coches;
cochesd.push(coche9 = {nombre:"FERRARI",color:"rojo",precio:1000000});
cochesd.push(coche10 = {nombre:"CITROEN C15", color:"blanco",precio:100});
console.log(`a;adimos 2 coches al final:`);
console.table(cochesd);

// e)
const cochese = coches;
cochese.splice(3,2);
console.log(`quitamos los coches de la posicion 3 y 4:`);
console.table(cochese);

// f)
const cochesf = cochese;
cochesf.splice(2,0,coche1 = {
    nombre:"BMW",
    color:"negro",
    precio:80000});
console.table(cochesf);

// g)
const cochesg = cochesf;
coches.splice(1,0,coche2 = {
    nombre:"MERCEDES",
    color:"blanco",
    precio:60000
});
console.table(cochesg);

// i)
const cochesCaros = coches.filter(coche => coche.precio > 30000);
const cochesBaratos = coches.filter(coche => coche.precio < 25000);

console.log(`coches caros:`);
console.table(cochesCaros);
console.log(`coches baratos:`);
console.table(cochesBaratos);

// h)
const Coche1 = {...coches[3]};
console.log(Coche1);
const Coche2 = {...coches[4]};
console.log(Coche2);
