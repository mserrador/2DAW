//DOM (Document Object Model)
//el document engloba todo el documento HTML. Nos permite acceder al head, al body y
//a cada una de las etiquetas y atributos que aparecen dentro de ellos

//como acceder a los diferentes elementos

let elemento;

elemento=document;

elemento=document.head;

elemento=document.body;


//selecciona los formularios del documento html
elemento=document.forms;

//selecciona el primer formulario del documento html
elemento=document.forms[0];

//muestra el id del formulario
elemento=document.forms[0].id;

//muestra al método del formulario
elemento=document.forms[0].method;


//muestra las clases del formulari
//devuelve un array
elemento=document.forms[0].classList;

//página a la que se envían los datos
elemento=document.forms[0].action;

//muestra los links 
//devuelve un array
elemento=document.links;

//acceder a un elemento concreto
elemento=document.links[0];


//muestra las clases del cuarto enlace
//devuelve un array
elemento=document.links[4].classList;

//muestra las clases del cuarto enlace
//devuelve un string
elemento=document.links[4].className;

//acceso a las imágenes
//devuelve un array
elemento=document.images;


//acceso a las imágenes
//devuelve un array
elemento=document.images[2];

//acceder al script
elemento=document.scripts;










console.log(elemento);
