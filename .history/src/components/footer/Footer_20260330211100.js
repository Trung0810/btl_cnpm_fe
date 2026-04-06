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
          <p>Email address: shoesstore16@gmail.com</p>
        </div>
      </div>
      <div className="footer-content">
        <div className="content-container">
          <h3>About us</h3>
          <p>
            We are dedicated to providing stylish, comfortable, and high-quality
            shoes that suit every lifestyle. Our collection is carefully curated
            to keep you confident, active, and on trend, while ensuring
            durability and everyday comfort. With a strong focus on customer
            satisfaction, we strive to deliver not just great products but also
            a seamless shopping experience. Step forward with confidence and
            express your unique style with us.
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
