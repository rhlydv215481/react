import React, { useState } from 'react'
import Regi from './component/Regi'
import Card from './component/Card'
import "./App.css"
const App = () => {
  const [data, setdata] = useState([])
  function recivedata(value) {
   setdata(
     [...data,
     value]
   )
    console.log(value);
    console.log(data);
    
  }
  return (
    <>
    < Regi  recivedata = {recivedata} />
    <Card data = {data} />
    </>
  )
}

export default App