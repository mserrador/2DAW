// Impresion de variables
// rafc + tabular

const mensaje="vini, vidi, vici";
const nuevoArray=[1,2,3,4,5,6];


// no se pueden mandar onjetos, hay que acceder a sus atributos y presentarlos EJ:(miObjeto.nombre)
const miObjeto={
    nombre:"Maximus",
    edad:32
}

// valor booleano
// un valor booleano  no se imprime por pantalla, pero si se puede pasar como argumento
const verdad = true;

// si la funcion es asincrona no se podria renderizar, porque la promesa es un objeto
// funcion
function suma(numero) {
    return 4 + numero;
}

// las funciones siempre que se puedan se dejaran fuera del componente, para eviatar
// que se vuelvan a renderizar
// para usar variables fueras del componente las llamamos con las llaves
export const App2 = () => {
  return (
    <>
        <h1>Famoso dicho Romano</h1>
        <h2>{mensaje}</h2>
        <p>{nuevoArray}</p>
        <p>{ 10 * 20 }</p>
        <p>{JSON.stringify(miObjeto)}</p>
        <p>{miObjeto.nombre}</p>
        <p>{miObjeto.edad}</p>
        <h1>{verdad}</h1>
        <p>El resultado es: {suma(2)}</p>

    </>
  )
}
