import React from 'react'
import "./HADLLING.SCSS"
import Button from "./Button";
const HADLLING = () => {
  const clickdownload = ()=>{
    alert("you just click download button")
  }
 let data = [
  {
    img:"https://media.istockphoto.com/photos/music-headphones-3d-rendering-picture-id1297657628?b=1&k=20&m=1297657628&s=170667a&w=0&h=6rdbFLXmBrexQKz3f5jB3GNZcDdA3bMO2PvsU5MNPXE=",
    username: "rahul",
    desprection:"lorem eioenoejw bjkcbefl"
  },
  {
    img: "https://tse3.mm.bing.net/th/id/OIP.uqAjE4Cpj7fRWKZLUoOCogHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    username: "classical",
    desprection : "njoehwe jh hiebdfqew kjhuiown"
  }
 ]
 return (
   
   <div className="musices">
{
  data.map( (elemt)=>
    
<div className="music">
<img src={elemt.img} alt="" />

<h1>{elemt.username}</h1>
<p>{elemt.desprection}</p>
<Button onClick={clickdownload} />
</div>


)
}
</div>

//  data.map( (element)=> " hrrlo" )

 
      
  )
}

export default HADLLING