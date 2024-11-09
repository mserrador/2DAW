//traversing de DOM

//childNodes (tiene en cuenta los retornos de carro). Devuelve nodos secundarios
//children, recorre nodos secundarios sin tener en cuenta los retornos de carro


//parentNode (tiene en cuenta los retornos de carro)
//parentElement (no tiene en cuenta los retornos de carro)


//nextElementSibling, permite acceder al primer hermano
//previousElementSibling, accede al hermano anterior

const navegar=document.querySelector('nav.navegacion');
console.log(navegar);

//console.log(navegar.childNodes);
console.log(navegar.children);

//const seccion=document.querySelector('section.destinos');
//console.log(seccion.childNodes);
//console.log(seccion.children);

//accedo el primer elemento del nav
console.log(navegar.children[0]);


//otro ejemplo
const card=document.querySelector('.card');

//console.log(navegar.childNodes);
console.log(card.children);
console.log(card.children[0]); //primer hijo
console.log(card.children[1]); //segundo hijo

console.log(card.children[1].children); 
console.log(card.children[1].children[2].textContent); 

//modificar el texto
card.children[1].children[2].textContent="5000 por persona"


//modificar la imagen del segundo card
const card2=document.querySelector('.card:nth-child(2)');
card2.children[0].src='img/hacer1.jpg';


//se puede recorrer desde el hijo hacia el padre
//parentElement

//const card=document.querySelector('.card');
console.log(card.parentElement);
console.log(card.parentElement.parentElement);

//acceso al hermano
console.log(card.nextElementSibling);//primer hermano
console.log(card.nextElementSibling.nextElementSibling);//segundo hermano

//previousElementSibling 
const ultimoCard=document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);

//firstElementChild
//lastElementChild
const navega2=document.querySelector('.navegacion');
console.log(navega2.firstElementChild);
console.log(navega2.lastElementChild);







