
import React from "react"
import User from './user'

const Users =({users, ...props}) => {
  console.log('modul-users',users)
  return (
    // users.map((user) => (
      <tr key={users._id} className = "align-baseline">

        <th scope = "row">{users.name}</th>

        <td key={users.qualities._id}>
            <User users={elem}/>
        </td>

        <td>{users.profession.name}</td>
        <td>{users.completedMeetings}</td>
        <td>{users.rate}</td>

        <td>
          {/* <button
            type="button"
            className="btn btn-danger rounded-pill"
            onClick={()=> props.onDelete(user._id)}
            >
            delete
            </button> */}
        </td>
      </tr>
    // )
}

export default Users