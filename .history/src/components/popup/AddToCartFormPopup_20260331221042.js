import React from "react";
import "./AddToCartFormPopup.css";

const AddToCartFormPopup = () => {
  return (
    <div className="add-to-cart-form-popup">
      <div className="overlay"></div>
      <form>
        <div className="form-popup-wrapper"></div>
        <div className="form-popup-wrapper">
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
  );
};

export default AddToCartFormPopup;
