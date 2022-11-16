import React from "react"
import Qualitie from "./qualitie"
import BookMark from "./bookMark"


const User =({users,...props}) => {
  console.log('id',users._id)
  let mass = BookMark.checkedArray
  console.log('massiv',mass)

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
          <button onClick={()=> props.onBookMark(BookMark(users._id))}>
            <i
              className={`bi bi-hand-thumbs-${props.flag}`}>
            </i>
          </button>
        </td>

  </>
    )
}

export default User
