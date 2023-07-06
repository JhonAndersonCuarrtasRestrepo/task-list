import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tareas from './pages/Tareas'
import { Menu } from './components/Menu'
import { SobreNosotros } from './pages/SobreNosotros'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
              <Menu/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sobre-nosotros" element={<SobreNosotros/>}/>
                    <Route path="/tareas" element={<Tareas/>}/>  
                </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
