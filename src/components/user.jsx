import React,{ useState } from "react";
import api from '../api'


const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  const [titleItems, setTitleItems] = useState(["Имя", "Качества", "Профессия","Встреч,кол-во","Оценка",""]);
  const [keyItems, setKeyItems] = useState(["name","qualities","profession","completedMeetings","rate","bookmark"])


  const aparty = () =>{
    return <h3><span className="badge bg-primary mt-1 ms-1">12 человек на сундук мертвеца</span></h3>
  }

  const rowTable = (index) => {
    const items = users[index]

    const buttonQualities = () => {
      const setClassName = "badge m-1 bg-"
      const elemQualitet = items.qualities
      return (
          elemQualitet.map(elem => <span key={elem._id} className={setClassName + elem.color}>{elem.name}</span>)
        )
    }

    return (
      <tr className="text-center">
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
            {titleItems.map((item, index) => (<th key={index} className="text-center" scope ="col">{item}</th>))}
          </tr>
        </thead>
        <tbody>
          {users.map((elem,index) => rowTable(index))}
        </tbody>
      </table>
      </>
    )   
  }

  const handleDelete =(userId) => {} //*-- кандидаты на гулянку(tabl)

  const renderPhrase = (number) => {} //*-- кол-во на гулянку

  return (
      <>
      {aparty()}
      {createTable()}
      </>
    )
}

export default Users