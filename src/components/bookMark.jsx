import React from "react";

const checkedArray = {}

const BookMark = ({idItem}) => {
  console.log('go-go', idItem)

  const getSetMark =(idItem)=> {
    if(checkedArray.hasOwnProperty(idItem)){
      checkedArray[idItem] = !checkedArray[idItem]
    } else {
      checkedArray[idItem] = true
    }
    console.log('mass', checkedArray)
    return checkedArray[idItem]

  }

  return (
    getSetMark(idItem)
    )
}

export default BookMark
