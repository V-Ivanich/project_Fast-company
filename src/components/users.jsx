
import React from "react"
import User from './user'

const Users =({ users,...props}) => {

  return (
    <>
      <tr key={users._id}>

        <th scope = "row">{users.name}</th>
          <User key={users._id}
          users={users}
          onBookMark={props.onBookMark}
          />
        <td>
          
          <button
            type="button"
            className="btn btn-danger rounded-pill"
            onClick={()=> props.onDelete(users._id)}
            >
            delete
          </button>
        </td>

      </tr>
    </>
  )
}

export default Users