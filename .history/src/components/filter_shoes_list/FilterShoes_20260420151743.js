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
          <input type="radio" name="dior" id="dior" />
          <label htmlFor="dior"></label>
        </div>
        <div>
          <input type="radio" name="gucci" id="gucci" />
          <label htmlFor="gucci" className="filter-shoes-select"></label>
        </div>
        <div>
          <input type="radio" name="adidas" id="addidas" />
          <label htmlFor="addidas" className="filter-shoes-select"></label>
        </div>
        <div>
          <input type="radio" name="bitis" id="bitis" />
          <label htmlFor="bitis" className="filter-shoes-select"></label>
        </div>
        <div>
          <input type="radio" name="nike" id="nike" />
          <label htmlFor="nike" className="filter-shoes-select"></label>
        </div>
        <div>
          <input type="radio" name="puma" id="puma" />
          <label htmlFor="puma" className="filter-shoes-select"></label>
        </div>
      </ul>
    </div>
  );
};

export default FilterShoes;
