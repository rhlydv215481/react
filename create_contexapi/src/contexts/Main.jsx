import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const countcontex = createContext()
const Main = ({ children }) => {
    const [count, setcount] = useState(0)
  return (
     <countcontex.Provider value={{ count, setcount }}>
      {children}
    </countcontex.Provider>
  )
}

export default Main
