import React from "react";
import photo from "../image/ava.png";

const CardUser = (id) => {
  console.log("card-");
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        background: "#dcdcdc",
        marginLeft: "5%"
      }}
    >
      <img
        src={photo}
        className="card-img-top"
        alt="ups..."
        style={{
          width: "100px",
          height: "100px",
          display: "block",
          margin: "6px 0px 0px 20%"
        }}
      />
      <div className="card-body">
        <h5 className="card-title">Заголовок карточки</h5>
        <p className="card-text">{id}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Вернуться обратно
        </a>
      </div>
    </div>
  );
};

export default CardUser;
