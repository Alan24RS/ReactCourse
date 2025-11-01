import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

 const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const json = await response.json()
      setData(json)
    } catch (err) {
      setError(err as string)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    console.log(data)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error}</div>
  }   

  return (
    <>
      <h1>Usuarios</h1>
      <ul>
        {data.map((user: { id: number; name: string }) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
