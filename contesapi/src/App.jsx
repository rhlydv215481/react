import React from 'react'
import Nav from './Componets/Nav';
import Profile from './Componets/Profile'
import  "./App.css"
import {First} from './Context/First'
const username = "Ydaves"
const App = () => {
  return (
    <div className='container' >
      <Nav/>
      <First.Provider value={username}>

      <Profile/>
      </First.Provider>
      
    </div>
  )
}

export default App
