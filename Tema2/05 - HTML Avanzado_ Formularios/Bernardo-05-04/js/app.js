const formu=document.querySelector("form");
const mostrar=document.querySelector("#mostrar")

const parrafo=document.createElement("p");
parrafo.classList.add("mostrado")
mostrar.addEventListener("click",(e)=>{
    e.preventDefault();
    const datos=new FormData(formu);
    datos.forEach((value,key) => {
        parrafo.textContent+=`${key} = ${value}; `
    });
    formu.appendChild(parrafo)
})

const restablecer=document.querySelector("#resete");

restablecer.addEventListener("click",()=>{
    parrafo.remove();
})
