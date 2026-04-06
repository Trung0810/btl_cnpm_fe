import React from "react";
import "./ShoesCard.css";

const ShoesCard = () => {
  return (
    <div className="shoes-card">
      <div className="shoes-card-wrapper">
        <img
          src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="#"
          className="shoes-card-image"
        />
      </div>
      <h3 className="shoes-card-name">Ten giay</h3>
      <div className="shoes-card-box">
        <span>Cost: 500000d</span>
        <span>
          4 <i className="fa fa-star"></i>
        </span>
      </div>
      <button className="shoes-card-button">Xem chi tiet</button>
      <button className="shoes-card-button">Them vao gio hang</button>
    </div>
  );
};

export default ShoesCard;
