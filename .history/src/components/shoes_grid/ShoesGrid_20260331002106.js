import React from "react";
import ShoesCard from "../shoes_list/ShoesCard";
import "./ShoesGrid.css";

const ShoesGrid = () => {
  return (
    <div className="shoes-grid">
      <div className="shoes-bar"></div>
      <ul className="shoes-grid-layout">
        <li>
          <ShoesCard></ShoesCard>
        </li>
      </ul>
    </div>
  );
};

export default ShoesGrid;
