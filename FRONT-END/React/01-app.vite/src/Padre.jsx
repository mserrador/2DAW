import {Hijo} from './Hijo.jsx'

export const Padre = () => {
    function suma(n1, n2) {
        return(n1 + n2);
    }

  return (
    <>
        <Hijo hijoAdoptivo={suma}/>     
    </>
  )
}
