import React, { useState } from 'react'
import "./Form.css"
const Forms = () => {
  const [info, setinfo] = useState({
    name : "",
    role :"",
    age : " ",
    experiance : " "
  });
 
  function changehandling (e){
      
      // console.log(e.target.value); 
      setinfo (
        // obj mai dyanmic ya vaule ko tore karna ka leya ok  [] use kar rahu array nhi issa square barlet  hai js mai 
        {
           ...info,
          [e.target.name]: e.target.value ,
        }
      )
  }
  function subitedhandl (e){
    e.preventDefault();

    
  }
    return (    
 <form onSubmit={subitedhandl}  >
  <label htmlFor="name">Name</label>
  <input name="name" type="text" onChange={changehandling} value={info.name} />

  <label htmlFor="role">Role</label>
  <input name="role" type="text" onChange={changehandling} value={info.role} />

  <label htmlFor="age">Age</label>
  <input name="age" type="number" onChange={changehandling} value={info.age}/>

  <label htmlFor="experiance">Experiance</label>
  <input name="experiance" type="text" onChange={changehandling} value={info.experiance}/>

  <button type="button">Remove</button>
</form>     
  )
}

export default Forms
