import React from "react";
import "./ShoesInfor.css";

const ShoesInfor = () => {
  return (
    <div className="shoes-infor">
      <div className="shoes-infor-wrapper">
        <div className="shoes-infor-image">
          <img
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="#"
          />
        </div>
        <div className="shoes-infor-detail">
          <h2>Shoes Name</h2>
          <p>
            <b>Cost:</b> 500000d
          </p>
          <p>
            <b>Brand:</b> Brand Name
          </p>
          <p>
            <b>Description:</b> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nostrum laudantium labore quos sit laboriosam esse
            voluptas aliquid sequi, ratione error dignissimos accusantium,
            eveniet, illo sapiente dolores officia voluptate placeat aspernatur.
          </p>
          <div className="shoes-infor-box">
            <h2>Spesification:</h2>
            <span>
              <i className="fa fa-tick"></i>Premium Materials - Made from
              high-quality, breathable, and durable materials.
            </span>
            <span>
              <i className="fa fa-tick"></i>Modern Design - Stylish and
              versatile, easy to match with any outfit.
            </span>
            <span>
              <i className="fa fa-tick"></i>All-day Comfort - Lightweight and
              cushioned for maximum comfort all day long.
            </span>
            <span>
              <i className="fa fa-tick"></i>Durable & Non-slip Sole - Strong
              grip and long-lasting performance.
            </span>
          </div>
        </div>
      </div>
      <div className="shoes-infor-more">
        <p>
          Rating: 4<i className="fa fa-star"></i>
        </p>
        <textarea name="comment" id="comment"></textarea>
      </div>
    </div>
  );
};

export default ShoesInfor;
