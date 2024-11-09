//modificar elementos

const encabezado=document.querySelector('.contenedor h1');
console.log(encabezado);

//obtener el texto

console.log(encabezado.innerText); //no encuentra el texto si la propiedad visibily esta a hidden
console.log(encabezado.textContent); //el texto


//texto con el html
console.log(encabezado.innerHTML);

//modificar el texto
document.querySelector('.contenedor h1').textContent="Busca un hospedaje nuevo";


//modificar una imagen
document.querySelector('.contenedor-cards  .card img').src='img/hacer2.jpg';
