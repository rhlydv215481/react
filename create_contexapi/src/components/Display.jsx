import React from 'react'
import "./Button.css"
import { useContext } from "react";
import {countcontex} from '../contexts/Main';
// const { count } = useContext(CountContext);
const  Display = () => {
 const {count} = useContext(countcontex);
  return (
  
    <div className='display'>
      <h1>{count}</h1>
    </div>
  )
}

export default Display
