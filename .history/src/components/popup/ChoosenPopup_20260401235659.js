import React from "react";

const ChoosenPopup = () => {
  return (
    <div className="choosen-popup">
      <Overlay></Overlay>
      <div className="image-wrapper">
        <img src="/success.png" alt="#" />
      </div>
      <h2 className="choosen-title">Add to cart successful</h2>
      <h3 className="choosen-desc">You can view it in your cart</h3>
      <button className="choosen-button">OK</button>
    </div>
  );
};

export default ChoosenPopup;
