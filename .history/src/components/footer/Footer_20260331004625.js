import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contact">
        <div className="contact-name">
          <h2>Shoes Store 16</h2>
          <p>Group 16</p>
        </div>
        <div className="contact-infor">
          <p>Phone number: 0343645587</p>
          <p>Email address: shoesstore16@gmail.com</p>
        </div>
      </div>
      <div className="footer-content">
        <div className="content-container">
          <h3>About us</h3>
          <p>
            We offer stylish, comfortable, and high-quality shoes for every
            lifestyle. Our collections are designed to keep you confident,
            active, and on trend in every step. We are committed to delivering
            great products along with a seamless and satisfying shopping
            experience.
          </p>
        </div>
        <div className="content-container">
          <h3>Open hours</h3>
          <p>
            Moday: 8am - 5pm
            <br />
            Tuesday - Friday: 11am - 6pm
            <br />
            Saturday: 8am - 12pm
          </p>
        </div>
        <div className="content-container">
          <h3>Address</h3>
          <p>96A Tran Phu Street, Ha Dong Ward, Hanoi City, Vietnam</p>
        </div>
        <div className="content-container">
          <h3>Follow us</h3>
          <p>
            Facebook
            <br />
            Instagram
            <br />
            Tiktok
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
