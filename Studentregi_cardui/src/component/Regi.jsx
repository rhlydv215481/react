import React, { useState } from  'react'
import "./Regi.scss";

const Regi = (propes) => {
  console.log(propes.recivedata);
  
  const [formdata, setformdata] = useState( {
    Name : "",
    password : "",
    gender : "",
    age: "",
  })
  // const [alldata, setalldata] = useState([])

  function changehandel(e){
 setformdata(
  {
    ...formdata,//ye pura obj store kar rahai ok  
    //  Name : "",
    // password : "",
    // gender : " ",
    // age: "",
    [e.target.id] : e.target.value, // id mai input field ka id name  aarahai ussa ka value  fir paasword  ussa ki value ye sab store hora
    // ye sa store horahai ...formdata kyu ki setformdata use ho rahai 
  },
 )
     
  }
// const [Name, setName] = useState('');
// const [password, setPassword] = useState('');
// function changehandel(e){
//  console.log(e.target);
 
//   // setName(e.target.value)
//   // setPassword(e.target.value)
// }
function formhandler(e){
e.prevent.Default

}
function submitedhandling (e){
  e.preventDefault();
//  array.push(formdata);
//   console.log(array);
propes. recivedata(formdata);
  setformdata(
    {
      
  ...formdata,
   Name : "",
    password : "",
    gender : " ",
    age: ""
    }
  )
}
  return (
    <div className='regi'>
        <img src="https://images.unsplash.com/photo-1577787828916-1ca00ba820e9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       <h1>{formdata.Name}</h1>
       {/* <h1> {Name}</h1>
       <h1>pas : {password}</h1> */}
       {/* <h1>SING UP, TO </h1>  */}
       <h2>START STUDENT LIFE</h2>
        <form  onSubmit={submitedhandling}   >
        <label htmlFor='Name'> Name: <input onChange={changehandel } value={formdata.Name}  id='Name'
 type="text" placeholder='"Entre your name' /></label>
        <label htmlFor="password">Password : <input value={formdata.password} type="text" id="password" onChange={changehandel }   /></label>

<label >
  Gender:

  <input type="radio" id="gender" name="gender" value="male"  checked={formdata.gender === "male"} onChange={changehandel }  />
  Male

  <input type="radio" id="gender" name="gender" value="female"   checked={formdata.gender === "female"} onChange={changehandel } />
  Female
</label>

      <label htmlFor="Age">Age : <input type="text" id='age' onChange={changehandel } value={formdata.age}  /></label>
       
       <button type='submit'>submitted</button>
       
        </form>
    {/* <h1> hello</h1> */}
    </div>

  )
}

export default Regi
