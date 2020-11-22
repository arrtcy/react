import React from "react";
import { Checkbox } from "antd";
import UpDown from "./UpDown";
import "./cart.css";

function CartCards(props) {
  return (
    <div className="card">
      <p>xx商家</p>
      <div className="content">
        <Checkbox />
        <img src={props.coverImg} alt="购物图" />
        <div className="right">
          <p>{props.name}</p>
          <span>{props.desc}</span>
          <div className="bottom">
            <span>{props.price}1</span>
            <UpDown num="5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCards;
