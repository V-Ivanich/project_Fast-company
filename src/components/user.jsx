import React,{ useState } from "react";
import api from '../api'


const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  const titleItems =["Имя", "Качества", "Профессия","Встреч,кол-во","Оценка",""]
  const [countUsers, setCountUsers] = useState(users.length)
  const [textContents, setTextContent] = useState(" человек тусанет с тобой сегодня")
  const [messageAttribute, setMessageAttribute] = useState("badge mt-1 ms-1 bg-primary")

const textMassage = () => {
  let textStr = users.length ? users.length + ' ' + textContents : textContents
  return (
    <h3><span className={messageAttribute}>{textStr}</span></h3>
    )
  }

  const rowTable = (index) => {
    const items = users[index]
    return (
      <tr key={items._id} className = "align-baseline">
        <th scope = "row">{items.name}</th>
        <td key={items.qualities._id}>
          {items.qualities.map(elem => <span key={elem._id} className= {`badge rounded-pill px-3 py-2 m-1 bg-`+ elem.color}>{elem.name}</span>)}
        </td>
        <td>{items.profession.name}</td>
        <td>{items.completedMeetings}</td>
        <td>{items.rate}</td>
        <td>
          <button type="button" className="btn btn-danger rounded-pill" onClick={()=> handleDelete(items._id)}>delete</button>
        </td>
      </tr>
    )
  }

  const createTable = () => {
    if(users.length === 0) return false
    return  (
      <>
      <table className="table table-striped table-hover">
        <thead className="table-secondary">
          <tr key={users._id}>
            {titleItems.map((item, index) => (<th key={index} className="ms-4" scope ="col">{item}</th>))}
          </tr>
        </thead>
        <tbody>
          {users.map((elem,index) => rowTable(index))}
        </tbody>
      </table>
      </>
    ) 
  }

  const handleDelete =(userId) => {
    let activCount = countUsers
    setUsers(prevState => prevState.filter(user => user._id !== userId))
    activCount -= 1
    setCountUsers(countUsers -1)
    renderPhrase(activCount)
  }

  const renderPhrase = (number) => {
    let pattern = /^[2-4]{1}$|^.{0,}[2-4][2-4]$/
    console.log(pattern.test(5))

    if(number === 0) {
      setTextContent((prevState) => prevState = "Никто не пойдет с тобой тусить")
      setMessageAttribute((prevState) => prevState ="badge mt-1 ms-1 bg-danger")
    }
    if(pattern.test(number)){
      setTextContent((prevState) => prevState= "человека тусанет с тобой сегодня")
    } else {
      setTextContent((prevState) => prevState = "человек тусанет с тобой сегодня")
    }
    return
  }

  return (
      <>
      {textMassage()}
      {createTable()}
      </>
    )
}



export default Users