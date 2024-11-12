// 10) Escribe un programa que lea por teclado las notas numéricas de 5 alumnos junto a su nombre. El
// resultado a mostrar será junto al nombre del alumno, la nota en calificación alfabética teniendo en
// cuenta la siguiente tabla

let notas = []
let nombres = [] 
for (let i = 0; i < 5; i++) {
    notas[i] = prompt(`Introduce tu nota:`)
    nombres[i] = prompt(`Introduce tu nombre:`)
}   

for(let i = 0; i < 5; i++) {
    if (notas[i] < 5){
        console.log(`${nombres[i]}  tiene un insuficiente`)
    } else if (notas[i] >= 5 && notas[i] < 6){
        console.log(`${nombres[i]}  tiene un suficiente`)
    } else if (notas[i] >= 6 && notas[i] < 7){
        console.log(`${nombres[i]}  tiene un bien`)
    } else if (notas[i] >= 7 && notas[i] < 9){
        console.log(`${nombres[i]}  tiene un notable`)
    } else if (notas[i] >= 9){
        console.log(`${nombres[i]}  tiene un sobresaliente`)
    }
}





