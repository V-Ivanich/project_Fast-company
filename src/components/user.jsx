import React from "react"
import Qualitie from "./qualitie"
// import BookMark from "./bookMark"

const User =({users}) => {
  console.log('user-1',users.qualities)
  return (
    users.qualities.map(elem => 
    <Qualitie
    color={elem.color}
    name={elem.name}
    id ={elem._id}
    />)
    )
}

export default User
