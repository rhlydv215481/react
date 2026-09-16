import React, { useState } from 'react'

const App = () => {
  const [count, setcount] = useState(0)
  let a = 20;
  function formhandling(e) {
    e.preventDefault();
    e.target.value
    // console.log("formsubmitted")
    e.target.reset();
  }
  return (
    <>
<h1>hiiii</h1>
<h1>{a}</h1>; 

     <h1>{count}</h1>
      <button onClick={()=> setcount(count+1)} >+</button>
      <form  onSubmit={formhandling}>
        <input type="text" />
         <button>submitted</button>
         <h1> hello {formhandling}</h1>
      </form>
    </>
  )
}

export default App