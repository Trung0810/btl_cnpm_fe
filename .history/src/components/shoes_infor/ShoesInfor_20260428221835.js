import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import sumId from "../helper_function/SumId";
import "./ShoesInfor.css";

const ShoesInfor = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
              {data.feature.map((item, index) => (
                <p key={index}>
                  <i className="fa fa-check"></i>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
      {data && (
        <div className="shoes-infor-more">
          <p>
            Rating: {data.rate}
            <i className="fa fa-star"></i>
          </p>
          <form onSubmit={handleSubmit}>
            <textarea
              name="comment"
              id="comment"
              placeholder="comment..."
              className="shoes-infor-comment"
            ></textarea>
            <button style={{ backgroundColor: "#20e3b4", color: "#fff" }}>
              Comment
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ShoesInfor;
