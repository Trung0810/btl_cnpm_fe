import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Overlay from "../overlay/Overlay";
import { CartContext } from "../infor_provider/CartProvider";
import "./AddToCartFormPopup.css";
import { useForm } from "react-hook-form";

const AddToCartFormPopup = ({ id, handleCancel }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { handleAddToCart } = useContext(CartContext);

  const {} = useForm({ mode: "onChange" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8888/v1/api/shoes/${id}`,
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
    <div className="add-to-cart-form-popup">
      <Overlay></Overlay>
      {loading && <div className="loading"></div>}
      {data && (
        <div className="form-popup">
          <div className="form-popup-infor">
            <img
              src={`/shoes_image/${data.type}/${data.category}/${data.image}`}
              alt="#"
            />
            <div>
              <h2>{data.name}</h2>
              <span>Price: {data.price}d</span>
            </div>
          </div>
          <form>
            <div className="form-popup-wrapper">
              <h3>Color</h3>
              <div className="choose">
                {data.color.length > 0 &&
                  data.color.map((item, index) => (
                    <div key={index}>
                      <input type="radio" name="color" id={item} />
                      <label htmlFor={item}>{item}</label>
                    </div>
                  ))}
              </div>
            </div>
            <div className="form-popup-wrapper">
              <h3>Size</h3>
              <div className="choose">
                {data.size.length > 0 &&
                  data.size.map((item, index) => (
                    <div key={index}>
                      <input type="radio" name="size" id={item} />
                      <label htmlFor={item}>{item}</label>
                    </div>
                  ))}
              </div>
            </div>
            <div className="form-popup-button">
              <button className="form-popup-cancel" onClick={handleCancel}>
                Cancel
              </button>
              <button className="form-popup-add">Add to cart</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddToCartFormPopup;
