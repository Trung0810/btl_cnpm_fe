import React from "react";
import ShoesCard from "../shoes_list/ShoesCard";

const ShoesGrid = () => {
  return (
    <div className="shoes-grid">
      <div className="shoes-bar"></div>
      <div className="shoes-grid-layout">
        <ShoesCard></ShoesCard>
      </div>
    </div>
  );
};

export default ShoesGrid;
