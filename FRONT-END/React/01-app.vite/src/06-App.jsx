// vamos a crear un custom hook  que me va a permitir
// reutilizarlo en cualquier componente

import { useState } from "react"
// custom hook
export const useContador = () => {
    const [contador,setContador]=useState(0);
    const Incrementar = () => {
        setContador( (c) => c + 1);
    }
    const Decrementar = () => {
        setContador( (c) => c - 1);
    }
    const Resetear = () => {
        setContador(0);
    }
  
    return ({
    Incrementar, 
    Decrementar,
    Resetear,
    contador
    })
}


export const App6 = () => {
  const primerContador=useContador();
  const {Incrementar,Decrementar,Resetear,contador} = primerContador;
  return (
    <>
        <h1>PRIMER CONTADOR {contador}</h1>
        <button onClick={Incrementar}>Incrementar</button>
        <button onClick={Decrementar}>Decrementar</button>
        <button onClick={Resetear}>Resetear</button>
    </>
  )
}
