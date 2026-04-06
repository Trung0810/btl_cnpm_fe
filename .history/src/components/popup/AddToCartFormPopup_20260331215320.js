import React from "react";

const AddToCartFormPopup = () => {
  return (
    <div className="add-to-cart-form-popup">
      <div className="overlay"></div>
      <form>
        <div className="form-popup-wrapper">
          <label htmlFor="white"></label>
          <input type="checkbox" name="color" id="white" />
          <label htmlFor="black"></label>
          <input type="checkbox" name="color" id="black" />
          <label htmlFor="gray"></label>
          <input type="checkbox" name="color" id="gray" />
          <label htmlFor="green"></label>
          <input type="checkbox" name="color" id="green" />
          <label htmlFor="pink"></label>
          <input type="checkbox" name="color" id="pink" />
          <label htmlFor="yellow"></label>
          <input type="checkbox" name="color" id="yellow" />
        </div>
      </form>
    </div>
  );
};

export default AddToCartFormPopup;
