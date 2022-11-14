import React from "react"
import Qualitie from "./qualitie"
// import BookMark from "./bookMark"

const User =({users}) => {
  console.log(users)
  return (

    users.map((user) => (
        <tr key={user._id} className = "align-baseline">
          <th scope = "row">{user.name}</th>

          <td key={user.qualities._id}>
            {user.qualities.map(elem =>
              <Qualitie color={elem.color} name={elem.name} id ={elem._id}/>)}
          </td>

          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}</td>
          <td>
            {/* <button
            type="button"
            className="btn btn-danger rounded-pill"
            onClick={()=> handleDelete(user._id)}
            >
            delete
            </button> */}
          </td>
        </tr>
      ))

    )
}

export default User


{/* // import React,{ useState } from "react"
// import api from '../api'

// const Users = () => { */}

  {/* // const inicialState = api.users.fetchAll()
  // const [users, setUsers] = useState(inicialState) */}

  const titleItems =["Имя", "Качества", "Профессия","Встреч,кол-во","Оценка",""]

{/* const textMassage = () => { */}
  {/* //   return (
  //     <h1 className={`badge rounded-pill mt-1 ms-1 px-2 py-2 bg-` + (users.length > 0 ? 'primary': 'danger')}>
  //       {users.length !== 0 ? renderPhrase(users.length) : "Никто не пойдет с тобой тусить"}
  //     </h1>
  //   )
  // }

  // const renderPhrase = (number) => { */}
  {/* //   let pattern = /^[2-4]{1}$|^.{0,}[2-4]$|^.{0,}[2-4][2-4]$/ */}

  {/* //   if(pattern.test(number)) return `${number} человека тусанет с тобой сегодня` */}
  {/* //   return `${number} человек тусанет с тобой сегодня` */}
  {/* // } */}

{/* //   const handleDelete =(userId) => { */}
{/* //     setUsers(prevState => prevState.filter(user => user._id !== userId)) */}
//   }

{/* //   const createTable = ()=> { */}
{/* //     return (
//       <>
//       {users.length > 0 && (
//       <table className="table table-striped table-hover">
//       <thead className="table-secondary">
//         <tr key={users._id}>
//           {titleItems.map((item, index) => (<th key={index} className="ms-4" scope ="col">{item}</th>))}
//         </tr>
//       </thead>
//       <tbody>
//         {createTableBody()}
//       </tbody>
//       </table>
//       )}
//       </>
      
//     )
//   } */}
  
{/* //   const createTableBody = () => {
//     return users.map((user) => (
//         <tr key={user._id} className = "align-baseline">
//           <th scope = "row">{user.name}</th>

//           <td key={user.qualities._id}>
//             {user.qualities.map(elem =>
//               <span key={elem._id} className= {`badge rounded-pill px-3 py-2 m-1 bg-`+ elem.color}>
//                 {elem.name}
//               </span>)}
//           </td>

//           <td>{user.profession.name}</td>
//           <td>{user.completedMeetings}</td>
//           <td>{user.rate}</td>
//           <td>
//             <button
//             type="button"
//             className="btn btn-danger rounded-pill"
//             onClick={()=> handleDelete(user._id)}
//             >
//             delete
//             </button>
//           </td>
//         </tr>
//       ))
//   }

//   return (
//       <>
//       {textMassage()}
//       {createTable()}
//       </>
//     )
// }

// export default Users */}