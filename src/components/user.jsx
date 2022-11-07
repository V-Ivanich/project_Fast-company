import React,{ useState } from "react";
import api from '../api'

const titleTable = [
  'Имя','Качества','Профессия','Встреч,кол-во','Оценка'
]

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const elementTH =()=>{
    return (
    titleTable.map((item) => (<th scope ="col">{item}</th>))
    )
  }

  const createTable = () => {
    return (
      <>
      <table className="table">
        <thead>
          <tr>
            {elementTH()}
          </tr>
        </thead>
      </table>
      </>
    )   
  }

  const handleDelete =(userId) => {} //*-- кандидаты на гулянку(tabl)

  const renderPhrase = (number) => {} //*-- кол-во на гулянку

  return (
      <>
      {createTable()}
      </>
    )
}

export default Users