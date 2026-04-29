import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import standardization from "../helper_function/Standardization";
import { ShoesContext } from "../infor_provider/ShoesProvider";
import "./FilterShoes.css";

const FilterShoes = ({ params }) => {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const { setCurrentPage, setFilter } = useContext(ShoesContext);

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
      <div
        className="filter-shoes-menu"
        onClick={() => setShow((prev) => !prev)}
      >
        <span>{standardization(params)}</span>
        {!show && (
          <span>
            <i className="fa fa-caret-down"></i>
          </span>
        )}
        {show && (
          <span>
            <i className="fa fa-caret-up"></i>
          </span>
        )}
      </div>
      <form
        className="filter-shoes-dropdown"
        style={
          show
            ? { display: "block", opacity: 1, visibility: "visible" }
            : { display: "none" }
        }
      >
        {data &&
          data.map((item, index) => (
            <div key={index} className="filter-shoes-select">
              <input type="radio" name={params} id={item} />
              <label
                htmlFor={item}
                onClick={(event) => {
                  if (params !== "sort") {
                    setFilter((prev) => ({
                      ...prev,
                      [params]: item.includes("all") ? "all" : item,
                    }));
                  } else {
                    setFilter((prev) => ({
                      ...prev,
                      sort: item.includes("no")
                        ? null
                        : item.includes("ascending")
                          ? "1"
                          : "-1",
                      price: item.includes("price") ? true : false,
                      rate: item.includes("rate") ? true : false,
                    }));
                  }
                  setCurrentPage(1);
                }}
              >
                {standardization(item)}
              </label>
            </div>
          ))}
      </form>
    </div>
  );
};

export default FilterShoes;
