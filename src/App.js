import React, { useState } from 'react'
import Users from './components/user'
import SearchStatus from './components/searchStatus'
import API from './api'

function App() {
  const inicialState = API.users.fetchAll()
  const [users, setUsers] = useState(inicialState)

  return (
    <>
      <SearchStatus length={users.length} />
      <Users users={users} />
    </>
  )
}

export default App
