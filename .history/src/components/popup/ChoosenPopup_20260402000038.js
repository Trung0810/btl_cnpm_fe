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
      <p className="choosen-desc">This action cannot be undone</p>
      <button className="choosen-button">OK</button>
    </div>
  );
};

export default ChoosenPopup;
