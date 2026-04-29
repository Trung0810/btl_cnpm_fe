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
          <input
            type="radio"
            name="dior"
            id="dior"
            className="filter-shoes=select"
          />
          <label htmlFor="dior"></label>
        </div>
        <div>
          <input
            type="radio"
            name="gucci"
            id="gucci"
            className="filter-shoes=select"
          />
          <label htmlFor="gucci"></label>
        </div>
        <div>
          <input
            type="radio"
            name="adidas"
            id="addidas"
            className="filter-shoes=select"
          />
          <label htmlFor="addidas"></label>
        </div>
        <div>
          <input
            type="radio"
            name="bitis"
            id="bitis"
            className="filter-shoes=select"
          />
          <label htmlFor="bitis"></label>
        </div>
        <div>
          <input
            type="radio"
            name="nike"
            id="nike"
            className="filter-shoes=select"
          />
          <label htmlFor="nike"></label>
        </div>
        <div>
          <input
            type="radio"
            name="puma"
            id="puma"
            className="filter-shoes=select"
          />
          <label htmlFor="puma"></label>
        </div>
      </ul>
    </div>
  );
};

export default FilterShoes;
