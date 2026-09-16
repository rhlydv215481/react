import React from 'react'
import { useContext } from "react";
import { useofdata } from "../Context/Heelo.jsx";
const Profile = () => {
  const user = useContext(useofdata);
  return (
    <div>
        <h2>these the  profile name is {user} </h2>
    </div>
  )
}

export default Profile