import React from "react"
import Qualitie from "./qualitie"
import BookMark from "./bookMark"


const User =({users,...props}) => {

  return (
    <>
    <td> {users.qualities.map(elem =>
      <Qualitie key={elem._id}
      color={elem.color}
      name={elem.name}
      id ={elem._id}/>)}
      </td>
      <td>{users.profession.name}</td>
        <td>{users.completedMeetings}</td>
        <td>{users.rate}</td>
    
        <td>
          <BookMark key={users._id}
          onMark={props.onBookMark}
          idItem={users._id}
          flag={props.flag}/>
        </td>
  </>
    )
}

export default User
