import React, { useState } from 'react'

export default function App() {
  const [user, setUser] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = {}

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fields),
    })
      .then((res) => res.json())
      .then(setUser)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
    </form>
  )
}
