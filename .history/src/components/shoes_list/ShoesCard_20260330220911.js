import React from "react";
import "./ShoesCard.css";

const ShoesCard = () => {
  return (
    <div className="shoes-card">
      <div className="shoes-card-wrapper">
        <img src="" alt="#" className="shoes-image" />
      </div>
      <h3 className="shoes-card-name">Ten giay</h3>
      <button className="shoes-button">Xem chi tiet</button>
      <button className="shoes-button">Them vao gio hang</button>
    </div>
  );
};

export default ShoesCard;
