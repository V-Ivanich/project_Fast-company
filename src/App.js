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
  const [flagUse, setFlagUse] = useState('down')

  const handleDelete = userId => {
    setUsers(prevState => prevState.filter(user => user._id !== userId))
  }

  const handleClickBookMark = flag => {
    setFlagUse(flag ? 'up-fill' : 'down')
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
              <Users
                key={user._id}
                users={user}
                flag={flagUse}
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
