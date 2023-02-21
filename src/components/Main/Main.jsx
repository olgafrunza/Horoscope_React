import React from "react";
import "./Main.scss";
import { data } from "../../helper/data.js";
import Card from "./Card";

function Main() {
  return (
    <div className="card-container">
      {data.map((sign) => {
        return <Card horoscope={sign} />;
      })}
    </div>
  );
}

export default Main;
