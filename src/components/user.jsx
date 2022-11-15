import React from "react"
import Qualitie from "./qualitie"
import BookMark from "./bookMark"

const User =({users, flag}) => {

  return (
    <>
    <td> {users.qualities.map(elem => <Qualitie key={elem._id} color={elem.color} name={elem.name} id ={elem._id}/>)} </td>

    <td>{users.profession.name}</td>
    <td>{users.completedMeetings}</td>
    <td>{users.rate}</td>
    
    <td>
      <i onClick={()=> BookMark()} className="bi bi-hand-thumbs-down"></i>
    </td>
  </>
    )
}

export default User
