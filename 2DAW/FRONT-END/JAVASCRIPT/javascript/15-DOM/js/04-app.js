//querySelector: devuelve el primer class, id o etiqueta html

//vamos a seleccionar la clase card

const card=document.querySelector('.card');
console.log(card);

const aux=document.querySelector('.categoria.concierto');
console.log(aux);

const aux1=document.querySelector('.premium .info');
console.log(aux1);

//nth-child(1) devuelve el primer elemento, 
//los indices empiezan en el 1 y NO en el 0
const aux2=document.querySelector('.hospedaje .card:nth-child(3)');
console.log(aux2);

const aux3=document.querySelector('section.hospedaje div.card:nth-child(2)');
console.log(aux3);

//permite acceder a etiquetas html
const aux4=document.querySelector('nav');
console.log(aux4);
