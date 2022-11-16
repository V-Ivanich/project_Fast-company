import React from "react";

const checkedArray = {}

const BookMark = ({...props}) => {

  const getSetMark =(idItem)=> {
    if(checkedArray.hasOwnProperty(idItem)){
      checkedArray[idItem] = !checkedArray[idItem]
    } else {
      checkedArray[idItem] = true
    }
    return checkedArray[idItem]

  }

  return (
    <button onClick={()=> props.onMark(getSetMark(props.idItem))}>
    <i
      className={`bi bi-hand-thumbs-${props.flag}`}>
    </i>
  </button>
    )
}

export default BookMark
