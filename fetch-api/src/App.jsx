

function App() {
  fetch("https://reqres.in/api/users?page=2")
    .then(response => response.json())
    .then(response => console.log(response.data))
  return (
   <div>
    
   </div>
  )
}

export default App
