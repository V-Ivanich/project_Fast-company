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

  const handleDelete = userId => {
    const userItems = users.filter(user => user._id !== userId)
    setUsers(userItems)
  }

  const handleClickBookMark = idItem => {
    const listItems = users.map(userItems => {
      if (userItems._id === idItem) {
        userItems.bookmark = !userItems.bookmark
      }
      return userItems
    })
    setUsers(listItems)
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

          <tbody>
            {users.map(usersItem => (
              <Users
                key={usersItem._id}
                usersItems={usersItem}
                onDelete={handleDelete}
                onBookMark={handleClickBookMark}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default App
