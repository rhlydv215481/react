import React from 'react'
import "./Card.css"
export const Card = (propes) => {
  return (
    <div className="cards-container">
  {propes.data.map((user, index) => (
    <div className="card" key={index}>
      <h2>{user.Name}</h2>

      <p>
        <strong>Age:</strong> {user.age}
      </p>

      <p>
        <strong>Gender:</strong> {user.gender}
      </p>

      <p>
        <strong>Password:</strong> {user.password}
      </p>
    </div>
  ))}
</div>

  )
}
export default Card