
import React from "react"
import User from './user'

const Users =({ usersItems,...props}) => {

  return (
    <>
      <tr key={usersItems._id}>

        <th scope = "row">{usersItems.name}</th>
          <User key={usersItems._id}
          user={usersItems}
          onBookMark={props.onBookMark}
          />
        <td>
          
          <button
            type="button"
            className="btn btn-danger rounded-pill"
            onClick={()=> props.onDelete(usersItems._id)}
            >
            delete
          </button>
        </td>

      </tr>
    </>
  )
}

export default Users