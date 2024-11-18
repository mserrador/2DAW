// 5) Crea un documento html que solicite al usuario un número (n) y escriba en el documento (n) tablas
//  de multiplicar, de los n primeros números (por ejemplo si introducen el 6, mostraremos las tablas del
// 1, 2, 3, 4, 5, y 6)

let num = prompt(`Introduce un numero:`);

for (let i = 1; i < num; i++) {
    console.log(`---------TABLA DEL ${i}-----------`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${j} x ${i} = ${j*i}`);
    };
};
