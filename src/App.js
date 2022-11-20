import React, { useState } from 'react'
import Users from './components/users'
import SearchStatus from './components/searchStatus'
import API from './api'

const titleItems = [
  'Имя',
  'Качества',
  'Профессия',
  'Встреч,кол-во',
  'Оценка',
  'Избранное',
  '',
]

function App() {
  const inicialState = API.users.fetchAll()
  const [users, setUsers] = useState(inicialState)

  const handleDelete = usersId => {
    const usersItems = users.filter(user => user._id !== usersId)
    setUsers(usersItems)
  }

  const handleToggleBookMark = idItem => {
    setUsers(
      users.map(usersItems => {
        if (usersItems._id === idItem) {
          usersItems.bookmark = !usersItems.bookmark
        }
        return usersItems
      }),
    )
  }

  return (
    <>
      <SearchStatus length={users.length} />
      {users.length > 0 && (
        <table className="table table-striped table-hover align-middle">
          <thead className="table-secondary">
            <tr key={users._id}>
              {titleItems.map((item, index) => (
                <th key={index} className="ms-4" scope="col">
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          <Users
            onDelete={handleDelete}
            onToggleBookMark={handleToggleBookMark}
            userItem={users}
          />
        </table>
      )}
    </>
  )
}

export default App
