import React from "react";

function Card(props) {
  return (
    <div className="cards">
      <div className="title">
        <h1>{props.horoscope.title}</h1>
      </div>
      <img src={props.horoscope.image} alt={props.horoscope.title} />
      <div className="card-over">
        <p>{props.horoscope.desc}</p>
      </div>
    </div>
  );
}

export default Card;
