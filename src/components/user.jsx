import React from "react"
import Qualitie from "./qualitie"
import BookMark from "./bookMark"


const User =({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
  onToggleBookMark,
  onDelete
}) => {

  return (
    <>
    <tr>
      <th scope = "row">{name}</th>

      <td>
        {qualities.map(qualElem => (
          <Qualitie key={qualElem._id}
            {...qualElem}/>
          ))}
      </td>

      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate} /5</td>
      
      <td>
        <BookMark
          onClick={() => onToggleBookMark(_id)}
          status={bookmark}/>
      </td>

      <td>
        <button
          type="button"
          className="btn btn-danger rounded-pill"
          onClick={()=> onDelete(_id)}
          >
          delete
        </button>
      </td>
    </tr>

  </>
    )
}

export default User
