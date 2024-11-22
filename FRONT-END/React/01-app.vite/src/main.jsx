//imr + tabular
import React from 'react'

//imp + tabular -- > importar los componentes
//import second from 'first'

//React DOM se encargar de renderizar los componentes de react para el navegador
//React Native hace lo mismo peor para dispositivos moviles
import ReactDOM from 'react-dom/client';
import {App,App1} from './00-App.jsx'
import { App2 } from './01-App.jsx';
import './App.css'; // importar hojas de estilo
import { App3 } from './03-App.jsx';
import {Padre} from './Padre.jsx';
import { App4 } from './04-App.jsx';
import { App5 } from './05-App.jsx';

// Renderiza el o los componentes
ReactDOM.createRoot(document.getElementById('root')).render(
  // se aconseja trabajar en modo estricto, porque nos va a permitir detectar 
  // errores comunes en la etapa de desarrollo
  <React.StrictMode>
    <App5 valor={3}/>
  </React.StrictMode>,
)
