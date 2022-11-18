import React from "react"
import Qualitie from "./qualitie"
import BookMark from "./bookMark"


const User =({users,...props}) => {

  return (
    <>
    <td> {users.qualities.map(userElem =>
      <Qualitie key={userElem._id}
        color={userElem.color}
        name={userElem.name}
        id ={userElem._id}/>)}
    </td>

    <td>{users.profession.name}</td>
    <td>{users.completedMeetings}</td>
    <td>{users.rate}</td>
    
    <td>
      <BookMark key={users._id}
        onMark={props.onBookMark}
        idItem={users._id}
        flag={users.bookmark}/>
    </td>
  </>
    )
}

export default User
