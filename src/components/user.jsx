import React,{ useState } from "react";
import api from '../api'


const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  const [titleItems, setTitleItems] = useState(["Имя", "Качества", "Профессия","Встреч,кол-во","Оценка"]);
  const [keyItems, setKeyItems] = useState(["name","qualities","profession","completedMeetings","rate","bookmark"])

  console.log(users)

  // const quli = ()=>{
  //   mykeys.qualities.forEach(item => {
  //     console.log(item.name, item.color)
  //   })
  // }
  // quli()


  const elementTH =()=>{
    return (
    titleItems.map((item, index) => (<th key={index} scope ="col">{item}</th>))
    )
  }



  const rowTable = (index) => {
    const items = users[index]
    console.log(keyItems[0])
    console.log(typeof items[keyItems[1]])

    const buttonQualities = () => {
      const setClassName = "btn m-4 btn-"
      const elemQualitet = items.qualities
      return (
          elemQualitet.map(elem => <button key={elem} type="button" className={setClassName + elem.color}>{elem.name}</button>)
        )
    }
    console.log(buttonQualities())

    return (
      <tr>
        {buttonQualities()}
        {/* {keyItems.map((itemKey) => (<td key={itemKey}>{keyItems}</td>))} */}
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