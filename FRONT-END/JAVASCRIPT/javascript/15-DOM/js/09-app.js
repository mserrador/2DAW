//eliminar elementos del DOM
//remove
//removeChild

const primerEnlace=document.querySelector('a');
//console.log(primerEnlace);
primerEnlace.remove();


const navegar=document.querySelector('.navegacion');
navegar.children[0].remove();


navegar.removeChild(navegar.children[0]);
