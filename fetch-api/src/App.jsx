import { useEffect, useState } from "react"
import {Fragment} from 'react'

function App() {
  const [userdata, setUserdata] = useState()

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
    .then(response => response.json())
    .then(response => setUserdata(response.data))
  },[])
  
  return (
    <Fragment>
      {userdata ? 
      userdata.map(user => 
        <div key={user.id}>
          <div>nome: {user.first_name}</div>
          <div>nome: {user.email}</div>
          <div>------------------------</div>
        </div>
      ) : <div>Carregando...</div>}
    </Fragment>
  )
}

export default App
