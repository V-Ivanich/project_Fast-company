import React from "react";

const BookMark = ({status, ...rest}) => {
  return (
    status ? 'bi bi-hand-thumbs-down': 'bi bi-hand-thumbs-up-fill'
    )
}

// export default BookMark

{/* <i class="bi bi-hand-thumbs-down"></i> */}
{/* <i class="bi bi-hand-thumbs-up-fill"></i> */}