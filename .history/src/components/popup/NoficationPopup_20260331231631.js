import React from "react";
import "./NoficationPopup.css";

const NoficationPopup = () => {
  return (
    <div className="nofication-popup">
      <div className="overlay"></div>
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
