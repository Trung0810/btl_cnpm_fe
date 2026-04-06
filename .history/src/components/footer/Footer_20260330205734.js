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
            At our store, we believe that a great pair of shoes is more than
            just fashion — it's a reflection of your personality and lifestyle.
            We are passionate about bringing you trendy, comfortable, and
            high-quality footwear that fits every moment of your day. <br />
            From casual streetwear to sporty designs, our collections are
            carefully selected to keep you confident, active, and stylish.
            Customer satisfaction is at the heart of everything we do, and we
            are committed to delivering not only great products but also an
            exceptional shopping experience.
          </p>
        </div>
        <div className="footer-container">
          <h3>Open hours</h3>
          <p>
            Moday: 8am - 5pm
            <br />
            Tuesday - Friday: 11am - 6pm
            <br />
            Saturday: 8am - 12pm
          </p>
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
