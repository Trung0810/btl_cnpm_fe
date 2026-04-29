import React, { useEffect } from "react";
import Overlay from "../overlay/Overlay";
import "./AddToCartFormPopup.css";

const AddToCartFormPopup = ({ id, handleCancel, handleAddToCart }) => {
  const [data, setData] = useState(null);

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
      {data && (
        <div className="form-popup">
          <img
            src={`/shoes_image/${data.type}/${data.category}/${data.image}`}
            alt="#"
          />
          <h2>Shoes Name</h2>
          <span>Price: {data.price}d</span>
          <div>
            <div className="form-popup-wrapper">
              <h3>Color</h3>
              <div className="choose">
                {data.color.length > 0 && (
                  <div>
                    <input type="radio" name="color" id="white" />
                    <label htmlFor="white">White</label>
                  </div>
                )}
              </div>
            </div>
            <div className="form-popup-wrapper">
              <h3>Size</h3>
              <div className="choose">
                <input type="radio" name="size" id="size36" />
                <label htmlFor="size36">36</label>
                <input type="radio" name="size" id="size37" />
                <label htmlFor="size37">37</label>
                <input type="radio" name="size" id="size38" />
                <label htmlFor="size38">38</label>
                <input type="radio" name="size" id="size39" />
                <label htmlFor="size39">39</label>
                <input type="radio" name="size" id="size40" />
                <label htmlFor="size40">40</label>
                <input type="radio" name="size" id="size41" />
                <label htmlFor="size41">41</label>
                <input type="radio" name="size" id="size42" />
                <label htmlFor="size42">42</label>
              </div>
            </div>
            <div className="form-popup-button">
              <button className="form-popup-cancel" onClick={handleCancel}>
                Cancel
              </button>
              <button
                className="form-popup-add"
                onClick={() => handleAddToCart(id)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCartFormPopup;
