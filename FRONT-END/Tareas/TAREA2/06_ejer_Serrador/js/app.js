// 6) Haz un documento html en el que se cree un array que contenga los meses del año
// ([‘Enero’,’Febrero’…]). Utiliza el array y el objeto Date para escribir en la página la fecha actual
// indicando los días que faltan para Nochevieja, por ejemplo: “Estamos a 10 de octubre de 2022, faltan
// x días para Nochevieja”

let mesesDelAnyo = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

let hoy = new Date();
console.log(`Estamos a ${hoy.getDate()} de ${hoy.getMonth()} de ${hoy.getFullYear()}, faltan `);


