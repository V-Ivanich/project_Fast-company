import React from "react";

const checkedArray = {}

const BookMark = ({...props}) => {

  const getSetMark =(idItem)=> {
    if(checkedArray.hasOwnProperty(idItem)){
      checkedArray[idItem] = !checkedArray[idItem]
    } else {
      checkedArray[idItem] = true
    }
    console.log(checkedArray)
    return idItem
  }

  return (
    <button className="btn rounded-pill btn-light" onClick={()=> props.onMark(getSetMark(props.idItem))}>
    <i
      className={`bi bi-hand-thumbs-${props.flag? 'up-fill': 'down'}`}>
    </i>
  </button>
    )
}

export default BookMark
