import React from 'react'
import "./App.css"
import Main from './contexts/Main';
import Button from './components/Button'
import Display from './components/Display'
import Resets from './components/Resets';
const App = () => {
  return (
    <div className='app'>
  <Main>

      <Display/>
     <Button/>
     <Resets/>
  </Main>
    </div>
  )
}

export default App
