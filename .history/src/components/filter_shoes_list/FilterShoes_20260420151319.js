import React from "react";
import "./FilterShoes.css";

const FilterShoes = () => {
  return (
    <div className="filter-shoes">
      <div className="filter-shoes-menu">
        <span>Brand</span>
        <span>
          <i className="fa fa-caret-down"></i>
        </span>
        {/* <span>
          <i className="fa fa-caret-up"></i>
        </span> */}
      </div>
      <ul className="filter-shoes-dropdown">
        <div>
          <input type="radio" name="gucci" id="gucci" />
          <label htmlFor="gucci"></label>
        </div>
      </ul>
    </div>
  );
};

export default FilterShoes;
