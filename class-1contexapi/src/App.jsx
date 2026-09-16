import React from 'react'
import Nav from './Components/Nav';
import Profile from './Components/Profile';

import  {useofdata} from './Context/Heelo.jsx';
const user = "Rahul";
const App = () => {
  

  return (
 <>

<Nav/>
<useofdata.Provider value={user}>

<Profile/>
</useofdata.Provider>
 </>
  )
}

export default App