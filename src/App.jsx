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
      <Routes>
        <Route path="depensar/" element={<Inicio/>}/>
        <Route path="depensar/sobre_mi" element={<SobreDerlis/>}/>
        <Route path="depensar/servicios" element={<Servicios/>}/>
        <Route path="depensar/contacto" element={<Contactame/>}/>
      </Routes>
      
     
    </>
    
    
      
    
  )
}

export default App
