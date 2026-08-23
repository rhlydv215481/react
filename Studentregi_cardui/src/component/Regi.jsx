import React from 'react'
import "./Regi.scss";
const Regi = () => {
  return (
    <div className='regi'>
        <img src="https://images.unsplash.com/photo-1577787828916-1ca00ba820e9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       <h1>SING UP, TO </h1> 
       <h2>START STUDENT LIFE</h2>
        <form >
        <label htmlFor='name'> Name: <input id='name' type="text" placeholder='"Entre your name' /></label>
        <label htmlFor="password">Password : <input type="text" id="password"  /></label>

<label>
  Gender:

  <input type="radio" name="gender" value="male" />
  Male

  <input type="radio" name="gender" value="female" />
  Female
</label>

        <label htmlFor="Age">Age : <input type="text" id='Age' /></label>
       
       <button>submitted</button>
        </form>

    </div>
  )
}

export default Regi