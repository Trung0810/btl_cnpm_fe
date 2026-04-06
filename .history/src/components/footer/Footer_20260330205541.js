import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contact">
        <div className="contact-name">
          <h2>NHOM 16</h2>
          <p>Shoes Store</p>
        </div>
        <div className="contact-infor">
          <p>Phone number: 0343645587</p>
          <p>Email address: nguyenductrung0810@gmail.com</p>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-container">
          <h3>About us</h3>
          <p>
            Moday: 8am - 5pm
            <br />
            Tuesday - Friday: 11am - 6pm
            <br />
            Saturday: 8am - 12pm
          </p>
        </div>
        <div className="footer-container">
          <h3>Open hours</h3>
          <p></p>
        </div>
        <div className="footer-container">
          <h3>Address</h3>
          <p></p>
        </div>
        <div className="footer-container">
          <h3>Follow us</h3>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
