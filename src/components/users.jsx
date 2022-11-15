
import React from "react"
import User from './user'

const Users =({ users,...props}) => {

  return (
    <>
      <tr key={users._id} className = "align-baseline">

        <th scope = "row">{users.name}</th>
        <User key={users._id} users={users} onBookMark={onBookMark}/>
        {/* <td key={users._id}>
            <User key={users._id} users={users}/>
        </td>

        <td>{users.profession.name}</td>
        <td>{users.completedMeetings}</td>
        <td>{users.rate}</td>

        <td>
        <i onClick={()=> props.onBookMark()} className="bi bi-hand-thumbs-down"></i>
        </td> */}

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