"use strict"
const form = document.querySelector('form');
const campoTexto = document.querySelector('.campoTexto');
const mensajeCampoTexto = document.createTextNode("El campo de texto esta vacio");
const saltoLinea = document.createElement('br');

form.insertBefore(saltoLinea,form.children[11]);
form.insertBefore(mensajeCampoTexto,form.children[12]);

campoTexto.addEventListener('input',(e)=>{
    e.preventDefault();
    if (e.target.value==''){
        console.log("el campo esta vacio");
        form.insertBefore(saltoLinea,form.children[11]);
        form.insertBefore(mensajeCampoTexto,form.children[12]);
    }else if (e.target.value!=''){
        saltoLinea.remove();
        mensajeCampoTexto.remove();


    }
})

const checkboxes = document.querySelector('.checkbox');
const checkbox1 = document.querySelector('.checkbox1');
const checkbox2 = document.querySelector('.checkbox2');
const checkbox3 = document.querySelector('.checkbox3');


checkbox1.addEventListener('click',(e)=>{
    if (checkbox1.checked == true) {
        console.log('la box1 se ha seleccionado')
    }else if (checkbox1.checked != true) {
        console.log('la box1 no se ha seleccionado')
    }
})
checkbox2.addEventListener('click',(e)=>{
    if (checkbox2.checked == true) {
        console.log('la box1 se ha seleccionado')
    }else if (checkbox2.checked != true) {
        console.log('la box1 no se ha seleccionado')
    }
})
checkbox3.addEventListener('click',(e)=>{
    if (checkbox3.checked == true) {
        console.log('la box1 se ha seleccionado')
    }else if (checkbox3.checked != true) {
        console.log('la box1 no se ha seleccionado')
    }
})






