import React, { useState } from 'react';
import Cards from './Componets/Cards'
import axios from 'axios';
import "./App.css"
const App = () => {
  const [information, setinformation] = useState([])
 const getdata = async () => {
  const response = await axios.get('https://picsum.photos/v2/list')
  // console.log("data mill gaya hai ok ");
  console.log(response.data);
  setinformation(
    response.data
  )
  console.log(information);
 }
  return (
    <div className='app-container' >
      <button onClick={getdata}  > get data</button>
      <div className="card-contaoner">
    <Cards information= {information} />    
      </div>
    </div>
  )
}

export default App