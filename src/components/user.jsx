import React from "react"
import Qualitie from "./qualitie"
import BookMark from "./bookMark"


const User =({user,...props}) => {

  return (
    <>
    <td> {user.qualities.map(userElem =>
      <Qualitie key={userElem._id}
        color={userElem.color}
        name={userElem.name}
        id ={userElem._id}/>)}
    </td>

    <td>{user.profession.name}</td>
    <td>{user.completedMeetings}</td>
    <td>{user.rate}</td>
    
    <td>
      <BookMark key={user._id}
        onMark={props.onBookMark}
        idItem={user._id}
        flag={user.bookmark}/>
    </td>
  </>
    )
}

export default User
