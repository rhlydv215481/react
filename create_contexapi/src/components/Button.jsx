import React, { useState } from 'react'
import { useContext } from "react";
import { countcontex } from '../contexts/Main'

import "./Button.css"
const Button = () => {
  
const { count, setcount } = useContext(countcontex);
  return (
 <div className="buttons">

    <button id="increment" onClick={()=>{ console.log("youclicked ",count)
      setcount(count+1)
    }}
    >
      increment
    </button>
    <button id="decrement" onClick={()=>{ console.log("youclicked ",count)
      setcount(count-1)
    }}>
    decrement
    </button>
    </div>
  )
}

export default Button
