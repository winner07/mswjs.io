import React, { useState } from 'react'

export default function App() {
  const [todos, setTodos] = useState(null)

  React.useEffect(() => {
    fetch('/todos')
      .then((res) => res.json())
      .then(setTodos)
  }, [])

  return (
    <form onSubmit={null}>
      <input type="email" name="email" />
      <input type="password" name="password" />
    </form>
  )
}
