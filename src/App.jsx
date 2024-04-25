import './App.css'
import { Valores } from './components/inicio/ValoresT.jsx'
import { FotoFrase } from './components/inicio/FotoFrase.jsx'
import { Header } from './components/inicio/HeaderP.jsx'
import { Portada } from './components/inicio/Portada.jsx'
import { Razones } from './components/inicio/Razones.jsx'
import { Servicios } from './components/inicio/Services.jsx'
import { SobreMi } from './components/inicio/SobreMi.jsx'
import { Inicia } from './components/inicio/Inicia.jsx'
import { FooterD } from './components/inicio/FooterD.jsx'


function App() {
 
  return (
    <>
    
      <Header/> 
      <Portada/>
      <Servicios/>
      <SobreMi/>
      <FotoFrase/>
      <Razones/>
      <Valores/>
      <Inicia/>
      <FooterD/>
    </>
    
    
      
    
  )
}

export default App
