// una caja de texto, conforme voy escribiendo valores y refresque la pagina, se mantenga la informacion
// usanado el use state, crear un componente, 

import { useState } from "react"

// en la pagina aparece una box de texto, la idea es inplementando un componente, lo que escribo en la cja se debe ver en la consola, cuando refresque, se debe seguir viendo el tecto en la cjaa y en la consola
// luego hago un custom hook 



/* export const GuardarEstado = () => {
    let textoInicial = localStorage.getItem("texto") || "";
    const [texto,setTexto] = useState(textoInicial);
    
    const cambio = (e) => {
        setTexto(e.target.value)
        localStorage.setItem("texto",texto)
        console.log(texto)
    }

  return (
    <>
        <input onInput={cambio} type="text" value={texto}></input>    
    
    </>
  )
} */

  export const GuardarEstado = () => {
    
    const [texto,setTexto] = useState{
        localStorage.getItem('text')
    };
    const setLocalStorage=value=>{
        setTexto(value)
        localStorage.setItem("text",value)
    }
    

  return (
    <>
        <input 
        // onInput={(e) => setTexto(e.target.value)} 
        onChange={(e) => setLocalStorage(e.target.value)}
        type="text" 
        value={texto}>
        </input>    
    
    </>
  )
}



export const App7 = () => {
  return (
    <div>07-App</div>
  )
}
