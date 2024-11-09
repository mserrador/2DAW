const local = document.getElementById('localStorage');
const sesion = document.getElementById('sessionStorage');
const reset = document.getElementById('boton'); 

local.addEventListener('input',(e)=>{
    const dato = JSON.stringify(e.target.value);
    localStorage.setItem('campoLocal',dato);


});

sesion.addEventListener('input',(e)=>{
    const dato = JSON.stringify(e.target.value);
    sessionStorage.setItem('campoSesion',dato);
});

reset.addEventListener('click',(e)=>{
    localStorage.clear();
    sessionStorage.clear();
});


local.value = JSON.parse(localStorage.getItem('campoLocal'));
sesion.value = JSON.parse(sessionStorage.getItem('campoSesion')); 
