//modificar css
//en js las propiedades que aparecen
//en css con un guión como justify-content
//se escribe sin guión justifyContent


const encabezado=document.querySelector('h1');
console.log(encabezado.style);

encabezado.style.backgroundColor="blue";
encabezado.style.textTransform="uppercase";


document.querySelector('.card').classList.add('nuevaClase', 'segundaClase');

document.querySelector('.card').classList.remove('nuevaClase');

const card=document.querySelector('.card');
//className devuelve un array
console.log(card.classList);

//className devuelve una string
console.log(card.className);

