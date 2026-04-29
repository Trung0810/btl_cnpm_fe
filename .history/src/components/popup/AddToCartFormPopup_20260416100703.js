import React from "react";
import Overlay from "../overlay/Overlay";
import "./AddToCartFormPopup.css";

const AddToCartFormPopup = ({ handleCancel }) => {
  return (
    <div className="add-to-cart-form-popup">
      <Overlay></Overlay>
      <div className="form-popup">
        <img
          src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="#"
        />
        <h2>Shoes Name</h2>
        <span>Cost: 500000d</span>
        <div>
          <div className="form-popup-wrapper">
            <h3>Color</h3>
            <div className="choose">
              <input type="radio" name="color" id="white" />
              <label htmlFor="white">White</label>
              <input type="radio" name="color" id="black" />
              <label htmlFor="black">Black</label>
              <input type="radio" name="color" id="gray" />
              <label htmlFor="gray">Gray</label>
              <input type="radio" name="color" id="red" />
              <label htmlFor="red">Red</label>
              <input type="radio" name="color" id="green" />
              <label htmlFor="green">Green</label>
              <input type="radio" name="color" id="yellow" />
              <label htmlFor="yellow">Yellow</label>
              <input type="radio" name="color" id="blue" />
              <label htmlFor="blue">Blue</label>
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
            <button className="form-popup-add">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartFormPopup;
