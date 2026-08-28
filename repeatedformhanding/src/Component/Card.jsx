import React from 'react'
import "./Card.css"
const Card = (propes) => {
  return (
    <div>
        {propes.value.map((elem, index) => (
    <div key={index} className="card">
      <h2>{elem.name}</h2>
      <p>Age: {elem.age}</p>
    </div>
  ))}
    </div>
  )
}

export default Card
