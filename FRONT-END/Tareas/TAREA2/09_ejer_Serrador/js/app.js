// 9) Haz un script de forma que el usuario pueda introducir su sueldo (en caso de hacerlo con decimales,
//debe de redondearse al alza) y los años de antigüedad. Se pide:
//    a) Si el sueldo es menor o igual a 900€ y su antigüedad es mayor a 10, se duplica el sueldo.
//    b) Si el sueldo es menor o igual a 900€ y su antigüedad es menor a 10, al sueldo inicial se le suma
//    la mitad del mismo.
//   c) Si el sueldo es mayor o igual a 900€, el sueldo se incrementa en 200€

let sueldo = prompt(`Introduce tu sueldo:`);
let anyos = prompt(`Introduce los anyos de antiguedad`);
sueldo = Math.ceil(sueldo);

if (sueldo <= 900 && anyos > 10) {
    sueldo = sueldo*2;
    console.log(`se duplica el sueldo: ${sueldo}`);
} else if (sueldo <= 900 && anyos < 10){
    let mitad = sueldo/2;
    sueldo = sueldo + mitad;
    console.log(`se suma la mitad del sueldo: ${sueldo}`);
} else if (sueldo>= 900){
    sueldo = sueldo + 200;
    console.log(`se suma 200 al sueldo ${sueldo}`);
}
