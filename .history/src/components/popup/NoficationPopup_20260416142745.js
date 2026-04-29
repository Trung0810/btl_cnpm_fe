import React from "react";
import Overlay from "../overlay/Overlay";
import "./NoficationPopup.css";

const NoficationPopup = ({ status, title, description, handleShow }) => {
  return (
    <div className="nofication-popup">
      {/* <Overlay></Overlay> */}
      <div className="image-wrapper">
        <img
          src={status === "success" ? "/success.png" : "/failed.png"}
          alt="#"
        />
      </div>
      <h2 className="nofication-title">{title}</h2>
      <p className="nofication-description">{description}</p>
      <button className="nofication-button" onClick={handleShow}>
        OK
      </button>
    </div>
  );
};

export default NoficationPopup;
