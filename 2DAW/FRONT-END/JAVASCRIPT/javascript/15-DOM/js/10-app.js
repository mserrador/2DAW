//añadir elementos al DOM

//appendChild, añade un hijo al final
//insertBefore(elemento,posicion), añade al antes de la posición

//createElement, crea una etiqueta html

//creo un enlace
const enlace=document.createElement('a');
enlace.textContent="carrito";
enlace.href="#"
enlace.classList.add('nueva-clase');
enlace.setAttribute('data-link','nuevo-enlace');

enlace.onclick=miFuncion;
function miFuncion(){
    alert('Estoy aprendiendo JS')
}
console.log(enlace);


//creo enlace1
const enlace1=document.createElement('a');
enlace1.textContent="carrito";
enlace1.href="#"
console.log(enlace1);

//inserto enlace y enlace1 en la posicion que quiero
const posicion=document.querySelector('.navegacion');
console.log(posicion.children[1]);
posicion.insertBefore(enlace,posicion.children[2]);

posicion.appendChild(enlace1);







