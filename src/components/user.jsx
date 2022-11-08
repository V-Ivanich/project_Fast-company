import React,{ useState } from "react";
import api from '../api'


const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  const [titleItems, setTitleItems] = useState(["Имя", "Качества", "Профессия","Встреч,кол-во","Оценка",""]);
  const [keyItems, setKeyItems] = useState(["name","qualities","profession","completedMeetings","rate","bookmark"])



  const aparty = () =>{
    return <h3><span className="badge bg-primary mt-1 ms-1">12 человек на сундук мертвеца</span></h3>
  }

  const elementTH =()=>{
    return (
    titleItems.map((item, index) => (<th key={index} scope ="col">{item}</th>))
    )
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

    const nameUsersTable = () => {
      return <td>{items.name}</td>
    }

    const profUsers = () => {
      return <td>{items.profession.name}</td>
    }

    const rateUsers = () => {
      return <td>{items.rate}</td>
    }
    const meetingsUsers = () => {
      return <td>{items.completedMeetings}</td>
    }

    return (
      <tr>
        {nameUsersTable()}
        <td>
          {buttonQualities()}
        </td>
        {profUsers()}
        {meetingsUsers()}
        {rateUsers()}
        <td>
          <button type="button" className="btn btn-danger">delete</button>
        </td>
      </tr>
    )
  }
  
  const tableRow = () => {
    return (
    <>
      {rowTable(0)}
    </>
    )
  }


  const createTable = () => {
    return (
      <>
      <table className="table">
        <thead className="table-light">
          <tr>
            {elementTH()}
          </tr>
        </thead>
        <tbody>
          {tableRow()}
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