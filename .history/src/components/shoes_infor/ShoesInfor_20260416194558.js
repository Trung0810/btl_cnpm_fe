import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ShoesInfor.css";

const ShoesInfor = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const feature = [
    "Breathable Upper - Keeps your feet cool and fresh even during long hours of wear.",
    " Flexible Fit - Adapts naturally to your foot for better movement and comfort.",
    " Shock Absorption - Reduces impact and protects your feet while walking or running.",
    " Lightweight Build - Designed to feel almost weightless for effortless steps.",
    " Stylish Finish - Enhances your look with a sleek and trendy appearance.",
    " Long-lasting Quality - Crafted to maintain performance and shape over time.",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8888/v1/api/shoes/${id}`,
        );

        setData(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="shoes-infor">
      {loading && <div className="loading"></div>}
      {data && (
        <div className="shoes-infor-wrapper">
          <div className="shoes-infor-image">
            <img
              src={`/shoes_image/${data.type}/${data.category}/${data.image}`}
              alt="#"
            />
          </div>
          <div className="shoes-infor-detail">
            <h2>{data.name}</h2>
            <p>
              <b>Price:</b> {data.price}d
            </p>
            <p>
              <b>Brand:</b> {data.brand}
            </p>
            <p>
              <b>Description:</b> {data.description}
            </p>
            <div className="shoes-infor-box">
              <h3>Spesification:</h3>
              <p>
                <i className="fa fa-check"></i>Premium Materials - Made from
                high-quality, breathable, and durable materials.
              </p>
              <p>
                <i className="fa fa-check"></i>Modern Design - Stylish and
                versatile, easy to match with any outfit.
              </p>
              <p>
                <i className="fa fa-check"></i>All-day Comfort - Lightweight and
                cushioned for maximum comfort all day long.
              </p>
              <p>
                <i className="fa fa-check"></i>Durable & Non-slip Sole - Strong
                grip and long-lasting performance.
              </p>
            </div>
          </div>
        </div>
      )}
      {data && (
        <div className="shoes-infor-more">
          <p>
            Rating: 4<i className="fa fa-star"></i>
          </p>
          <textarea
            name="comment"
            id="comment"
            placeholder="comment..."
            className="shoes-infor-comment"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default ShoesInfor;
