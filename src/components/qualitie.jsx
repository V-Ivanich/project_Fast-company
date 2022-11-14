import React from "react";

const Qualitie = ({ color, name, _id}) => {
  return (
        <span key={_id} className= {`badge rounded-pill px-3 py-2 m-1 bg-`+ color}>
          {name}
        </span>
  )
}

export default Qualitie