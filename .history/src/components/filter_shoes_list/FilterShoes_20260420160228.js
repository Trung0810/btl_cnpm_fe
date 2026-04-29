import React, { useEffect, useState } from "react";
import "./FilterShoes.css";
import axios from "axios";
import standardization from "../helper_function/Standardization";

const FilterShoes = ({ params }) => {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8888/v1/api/${params}`,
        );
        console.log("🚀 ~ fetchData ~ response:", response);

        setData(response.data.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="filter-shoes">
      <div className="filter-shoes-menu">
        <span>{standardization(params)}</span>
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
        {data &&
          data.map((item, index) => (
            <div key={index} className="filter-shoes-select">
              <input type="radio" name={item} id={item} />
              <label htmlFor={item}>Puma</label>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default FilterShoes;
