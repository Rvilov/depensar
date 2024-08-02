import './App.css'
import {Inicio} from './components/inicio/Inicio'
import {SobreDerlis} from './components/sobreMi/SobreDerlis'
import { Servicios } from './components/servicios/Servicios'
import { Contactame } from './components/contacto/Contactame'
import { Routes, Route } from 'react-router-dom'
import {Header} from './components/inicio/HeaderP'

function App() {
 
  return (
    <>
      <Header/>
      <Routes basename="/depensar">
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/sobre_mi" element={<SobreDerlis/>}/>
        <Route path="/servicios" element={<Servicios/>}/>
        <Route path="/contacto" element={<Contactame/>}/>
      </Routes>
      
     
    </>
    
    
      
    
  )
}

export default App
