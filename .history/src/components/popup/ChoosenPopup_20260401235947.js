import React from "react";
import Overlay from "../overlay/Overlay";
import "./ChoosenPopup.css";

const ChoosenPopup = () => {
  return (
    <div className="choosen-popup">
      <Overlay></Overlay>
      <div className="image-wrapper">
        <img src="/delete.png" alt="#" />
      </div>
      <h2 className="choosen-title">Delete this product</h2>
      <h3 className="choosen-desc">You can view it in your cart</h3>
      <button className="choosen-button">OK</button>
    </div>
  );
};

export default ChoosenPopup;
