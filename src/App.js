import React, { useState } from 'react'
import Users from './components/user'
import SearchStatus from './components/searchStatus'
import API from './api'

const titleItems = [
  'Имя',
  'Качества',
  'Профессия',
  'Встреч,кол-во',
  'Оценка',
  // 'Избранное',
  '',
]

function App() {
  const inicialState = API.users.fetchAll()
  const [users, setUsers] = useState(inicialState)

  const handleDelete = userId => {
    setUsers(prevState => prevState.filter(user => user._id !== userId))
  }

  return (
    <>
      <SearchStatus length={users.length} />
      {users.length > 0 && (
        <table className="table table-striped table-hover">
          <thead className="table-secondary">
            <tr key={users._id}>
              {titleItems.map((item, index) => (
                <th key={index} className="ms-4" scope="col">
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {users.map(user => (
              <Users users={user} onDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default App
