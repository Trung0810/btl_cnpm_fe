import React from "react";
import "./FilterShoes.css";

const FilterShoes = () => {
  return (
    <div className="filter-shoes">
      <div className="filter-shoes-menu">
        <span>Type</span>
        <span>
          <i className="fa fa-caret-down"></i>
        </span>
        <span>
          <i className="fa fa-caret-up"></i>
        </span>
      </div>
      <ul className="filter-shoes-dropdown">
        <li className="filter-shoes-select">Nike</li>
        <li className="filter-shoes-select">Adidas</li>
        <li className="filter-shoes-select">Puma</li>
        <li className="filter-shoes-select">Gucci</li>
      </ul>
    </div>
  );
};

export default FilterShoes;
