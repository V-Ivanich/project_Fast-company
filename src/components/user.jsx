import React,{ useState } from "react";
import api from '../api'


const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  const [titleItems, setTitleItems] = useState(["Имя", "Качества", "Профессия","Встреч,кол-во","Оценка",""]);
  const [countUsers, setCountUsers] = useState(0)


  const aparty = () =>{
    return <h3><span className="badge bg-primary mt-1 ms-1">{countUsers} человек на сундук мертвеца</span></h3>
  }

  const rowTable = (index) => {
    const items = users[index]

    const buttonQualities = () => {
      const setClassName = "badge m-1 bg-"
      const elemQualitet = items.qualities
      setCountUsers(countUsers => countUsers + 1)
      return (
          elemQualitet.map(elem => <span key={elem._id} className={setClassName + elem.color}>{elem.name}</span>)
        )
    }

    return (
      <tr>
        <td>{items.name}</td>
        <td>
          {buttonQualities()}
        </td>
        <td>{items.profession.name}</td>
        <td>{items.completedMeetings}</td>
        <td>{items.rate}</td>
        <td>
          <button type="button" className="btn btn-danger" onClick={handleDelete}>delete</button>
        </td>
      </tr>
    )
  }

  const createTable = () => {
    return (
      <>
      <table className="table table-striped table-hover">
        <thead className="table-secondary">
          <tr>
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
    console.log('click')
  } //*-- кандидаты на гулянку(tabl)

  const renderPhrase = (number) => {} //*-- кол-во на гулянку

  return (
      <>
      {aparty()}
      {createTable()}
      </>
    )
}

export default Users