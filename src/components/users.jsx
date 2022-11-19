
import React from "react"
import User from './user'

const Users =({ userItem,...props}) => {

  return (
    <>
      <tr key={userItem._id}>

        <th scope = "row">{userItem.name}</th>
          <User key={userItem._id}
          user={userItem}
          onBookMark={props.onBookMark}
          />
        <td>
          
          <button
            type="button"
            className="btn btn-danger rounded-pill"
            onClick={()=> props.onDelete(userItem._id)}
            >
            delete
          </button>
        </td>

      </tr>
    </>
  )
}

export default Users