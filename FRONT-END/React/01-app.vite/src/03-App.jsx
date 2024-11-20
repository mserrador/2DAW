// Comunicacion entre componentes

//Para hacer la comunicacion entre componentes se utilizaran las Props o properties
// props es un objeto


/* export const App3 = (props) => {
    console.log(props);
    return (
    <>
        <h1>{props.title}</h1>
        <h1>{props.nombre}</h1>
    </>
  )
} */

// Desestructuro el props que es un objeto
/* export const App3 = ({nombre, title}) => {
    //console.log(props);
    return (
    <>
        <h1>{title + 1}</h1>
        <h1>{nombre}</h1>
    </>
  )
} */

// ponemos un valor por defecto
export const App3 = ({nombre, title="por defecto"}) => {
    //console.log(props);
    return (
    <>
        <h1>{title + 1}</h1>
        <h1>{nombre}</h1>
    </>
  )
}