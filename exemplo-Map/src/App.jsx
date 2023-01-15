export default function App() {
  const users = [
    {
      name: 'Matheus',
      age: 21,
      isAdmin: true
    },
    {
      name: 'Antonio',
      age: 27,
      isAdmin: true
    },
    {
      name: 'Marcela',
      age: 54,
      isAdmin: false
    },
    {
      name: 'Patricia',
      age: 24,
      isAdmin: false
    },
    {
      name: 'Diego',
      age: 28,
      isAdmin: true
    },
    {
      name: 'Larissa',
      age: 22,
      isAdmin: true
    }
  ]
  return (
    users.map(user => 
      <div key={user.name}>
        <div>nome: {user.name}</div>
        <div>idade: {user.age}</div>
        <div>é ADM : {user.isAdmin ? "SIM" : "NÃO"}</div>
        <div>------------------------</div>
      </div>
    )
  )
}
