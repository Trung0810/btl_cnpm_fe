import React, { useEffect, useState } from "react";
import ShoesCard from "../shoes_list/ShoesCard";
import "./ShoesGrid.css";

const ShoesGrid = () => {
  const [data, setData] = useState(null);

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
        <ShoesCard></ShoesCard>
      </div>
      <div className="shoes-bar"></div>
    </div>
  );
};

export default ShoesGrid;
