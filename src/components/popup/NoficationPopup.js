import React from "react";
import Overlay from "../overlay/Overlay";
import "./NoficationPopup.css";

const NoficationPopup = () => {
  return (
    <div className="nofication-popup">
      <Overlay></Overlay>
      <div className="image-wrapper">
        <img src="/success.png" alt="#" />
      </div>
      <h2 className="nofication-title">Add to cart successful</h2>
      <p className="nofication-desc">You can view it in your cart</p>
      <button className="nofication-button">OK</button>
    </div>
  );
};

export default NoficationPopup;
