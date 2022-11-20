import React from "react";

const BookMark = ({status,...props}) => {
  return (
    <button
      className="btn rounded-pill btn-light" {...props}>
      <i
        className={`bi bi-hand-thumbs-${status? 'up-fill': 'down'}`}>
      </i>
  </button>
    )
}

export default BookMark
