
import React, { useState } from "react"
import Pagination from "./pagination"
import { paginate } from "../utils/paginate"
import User from './user'

const Users =({ users,...props}) => {
  const count = users.length
  const pageSize = 4
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange=(pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const userCrop = paginate(users, currentPage, pageSize)

  return (
    <>
    <tbody>
      
    {userCrop.map((user) => (
      <User key={user._id} {...props} {...user} />
    ))}

    </tbody>
    <Pagination
      itemsCount={count}
      pageSize= {pageSize}
      currentPage={currentPage}
      onPageChange={handlePageChange}/>
    </>
  )
}

export default Users