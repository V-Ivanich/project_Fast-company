
import React from "react"
import User from './user'

const Users =({users, ...rest}) => {
  return (
      <>
        {users.length > 0 && (
        <table className="table table-striped table-hover">
        <thead className="table-secondary">
        <tr key={users._id}>
          {titleItems.map((item, index) => (<th key={index} className="ms-4" scope ="col">{item}</th>))}
        </tr>
        </thead>
        <tbody>
        <User users={users}/>
        </tbody>
        </table>
      )}
      </>
    )
}
export default Users