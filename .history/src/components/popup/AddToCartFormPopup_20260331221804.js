import React from "react";
import "./AddToCartFormPopup.css";

const AddToCartFormPopup = () => {
  return (
    <div className="add-to-cart-form-popup">
      <div className="overlay"></div>
      <div className="form-popup-box">
        <img
          src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="#"
        />
        <form className="form-popup">
          <div className="form-popup-wrapper"></div>
          <div className="form-popup-wrapper">
            <h3>Size</h3>
            <label htmlFor="size36">
              <div>36</div>
            </label>
            <input type="checkbox" name="size" id="size36" />
            <label htmlFor="size37">
              <div>37</div>
            </label>
            <input type="checkbox" name="size" id="size37" />
            {/* <label htmlFor="size38"></label>
          <input type="checkbox" name="size" id="size38" />
          <label htmlFor="size39"></label>
          <input type="checkbox" name="size" id="size39" />
          <label htmlFor="size40"></label>
          <input type="checkbox" name="size" id="size40" />
          <label htmlFor="size41"></label>
          <input type="checkbox" name="size" id="size41" />
          <label htmlFor="size42"></label>
          <input type="checkbox" name="size" id="size42" /> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToCartFormPopup;
