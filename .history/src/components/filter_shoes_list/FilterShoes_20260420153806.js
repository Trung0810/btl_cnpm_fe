import React, { useState } from "react";
import "./FilterShoes.css";

const FilterShoes = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="filter-shoes">
      <div className="filter-shoes-menu">
        <span>Brand</span>
        {show && (
          <span>
            <i className="fa fa-caret-down"></i>
          </span>
        )}
        {!show && (
          <span>
            <i className="fa fa-caret-up"></i>
          </span>
        )}
      </div>
      <ul className="filter-shoes-dropdown">
        <div className="filter-shoes-select">
          <input type="radio" name="dior" id="dior" />
          <label htmlFor="dior">Dior</label>
        </div>
        <div className="filter-shoes-select">
          <input type="radio" name="gucci" id="gucci" />
          <label htmlFor="gucci">Gucci</label>
        </div>
        <div className="filter-shoes-select">
          <input type="radio" name="adidas" id="addidas" />
          <label htmlFor="addidas">Adidas</label>
        </div>
        <div className="filter-shoes-select">
          <input type="radio" name="bitis" id="bitis" />
          <label htmlFor="bitis">Bitis</label>
        </div>
        <div className="filter-shoes-select">
          <input type="radio" name="nike" id="nike" />
          <label htmlFor="nike">Nike</label>
        </div>
        <div className="filter-shoes-select">
          <input type="radio" name="puma" id="puma" />
          <label htmlFor="puma">Puma</label>
        </div>
      </ul>
    </div>
  );
};

export default FilterShoes;
