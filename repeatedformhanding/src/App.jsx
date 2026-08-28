import { useState } from 'react'
import Form from './Component/Form'
import Card from './Component/Card'
import './App.css'
function App() {
  const [data, setdata] = useState([])
 function receiveData(value) {
  // console.log(value)
    setdata([...data,
      value])

      console.log(data);
  } 
  return (
    <>
    <Form   propes = {receiveData} />
    <Card   value = {data} />
    </>
  )
}

export default App
