import React, { useEffect, useState } from "react";
import ShoesCard from "../shoes_list/ShoesCard";
import "./ShoesGrid.css";
import axios from "axios";

const ShoesGrid = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8888/v1/api/shoes?type=men`,
        );
        console.log("🚀 ~ fetchData ~ response:", response);

        setData(response.data.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="shoes-grid">
      <div className="shoes-bar"></div>
      <div className="shoes-grid-layout">
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <ShoesCard
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              type={item.type}
              category={item.category}
              price={item.price}
              rate={item.rate}
              handleShow={handleShow}
            ></ShoesCard>
          ))}
      </div>
      <div className="shoes-bar"></div>
    </div>
  );
};

export default ShoesGrid;
