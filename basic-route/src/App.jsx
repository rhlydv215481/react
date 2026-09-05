import React from 'react'
import "./App.scss"
import { Routes,Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from './pages/About';
import Produts from './pages/Produts';
import  Nav from './Componts/Nav'
const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Produts' element={<Produts/>} />
      <Route path='/About' element={<About/>}  />
    </Routes>
    </>
  )
}

export default App