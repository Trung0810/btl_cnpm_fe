import React from "react";
import Overlay from "../overlay/Overlay";
import "./ChoosenPopup.css";

const ChoosenPopup = ({ title, description, handleDelete, handleCancel }) => {
  return (
    <div className="choosen-popup">
      <Overlay></Overlay>
      <div className="image-wrapper">
        <img src="/delete.png" alt="#" />
      </div>
      <h2 className="choosen-title">{title}</h2>
      <p className="choosen-description">{description}</p>
      <div className="choosen-popup-wrapper">
        <button className="choosen-button-delete">Delete</button>
        <button className="choosen-button-cancel">Cancel</button>
      </div>
    </div>
  );
};

export default ChoosenPopup;
