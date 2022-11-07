import React,{ useState } from "react";
import api from '../api'

const titleTable = [
  'Имя','Качества','Профессия','Встреч,кол-во','Оценка'
]

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  console.log(users)
  // console.log(mykeys.name)
  // console.log(mykeys.bookmark)
  // console.log(mykeys.rate)
  // console.log(mykeys.completedMeetings)
  // console.log(mykeys.profession.name)

  // const quli = ()=>{
  //   mykeys.qualities.forEach(item => {
  //     console.log(item.name, item.color)
  //   })
  // }
  // quli()


  const elementTH =()=>{
    return (
    titleTable.map((item, index) => (<th key={index} scope ="col">{item}</th>))
    )
  }

  const rowTable = () => {
    return (
    users.map((item, index) => (<tr key={index}><td key={item._id}>{item.name}</td></tr>))
    )
  }
  const tableRow = () => {
    return (
    <>
      {rowTable()}
    </>
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
      {createTable()}
      </>
    )
}

export default Users