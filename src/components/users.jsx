
import React from "react"
import User from './user'

const Users =({ userItem,...props}) => {

  return (
    <>
    <tbody>
      
    {userItem.map((user) => (
      <User key={user._id} {...props} {...user} />
    ))}

    </tbody>
    </>
  )
}

export default Users