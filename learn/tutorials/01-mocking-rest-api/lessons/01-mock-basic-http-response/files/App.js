import React, { useState } from 'react'

export default function App() {
  const [todos, setTodos] = useState(null)

  React.useEffect(() => {
    fetch('/todos')
      .then((res) => res.json())
      .then(setTodos)
  }, [])

  if (!todos) {
    return null
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
