import React from "react";
import "./NoficationPopup.css";
import Overlay from "../overlay/Overlay";

const NoficationPopup = () => {
  return (
    <div className="nofication-popup">
      <Overlay></Overlay>
      <div className="image-wrapper">
        <img src="/success.png" alt="#" />
      </div>
      <h2 className="nofication-title">Add to cart successful</h2>
      <h3 className="nofication-desc">You can view it in your cart.</h3>
      <button className="nofication-button">OK</button>
    </div>
  );
};

export default NoficationPopup;
