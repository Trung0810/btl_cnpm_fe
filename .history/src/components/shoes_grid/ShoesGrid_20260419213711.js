import React, { useState } from "react";
import ShoesCard from "../shoes_list/ShoesCard";
import "./ShoesGrid.css";

const ShoesGrid = () => {
  const [data, setData] = useState(null);
  return (
    <div className="shoes-grid">
      <div className="shoes-bar"></div>
      <div className="shoes-grid-layout">
        <ShoesCard></ShoesCard>
      </div>
      <div className="shoes-bar"></div>
    </div>
  );
};

export default ShoesGrid;
