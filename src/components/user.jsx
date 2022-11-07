import React,{ useState } from "react";
import api from '../api'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete =(userId) => {} //*-- кандидаты на гулянку(tabl)

  const renderPhrase = (number) => {} //*-- кол-во на гулянку

  return (
      <>
      </>
    )
}

export default Users