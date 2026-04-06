import React from "react";
import ReactDOM from "react-dom";

const Overlay = () => {
  return ReactDOM.createPortal(<div className="overlay"></div>);
};

export default Overlay;
