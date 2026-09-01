import React from 'react'
import "./Cards.css";
const Cards = (propes) => {
  return (
    propes.information.map((elem)=>{
 return   <div className="cards" key={elem.id} >
      <img src={elem.download_url} alt="" />
      <h2>{elem.author}</h2>
    </div>
}
  )
)
}

export default Cards
