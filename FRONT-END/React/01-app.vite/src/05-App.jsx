//useState HOOK

import { useState } from "react";

//importar el useState. Los hook empiezan por la cadena "use".
// Los hooks que hagamos de forma persobnalizada comenzaran tmb por la cadena "use"

// const [count, setCount] = useState(valorInicial);
// count: representa el valor de estado actual del hook
// setCount: metodo para actualizar el valor del estado del hook
// useState(0); 0 es el valor inicial del estado. Puede ser un string, objeto, numero


export const App5 = ({valor}) => {
    const [count, setCount] = useState(valor);

    const mostrarEvento = () => {
        //ERROR count++;
        //ERROR count += 1;

        // setCount(count+1);
        // setCount(1000);
        // setCount( (c) => c + 1);

        setTimeout(()=>{
            //setCount(count + 1)
            setCount((c) => c + 1);
        },1000) //ERROR

    }
    return (
    <>
        <h1>{count}</h1>
        <button onClick={mostrarEvento}></button>
    </>
  )
}
