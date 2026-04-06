import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contact">
        <div className="contact-name">
          <h1>NHOM 16</h1>
          <p>Website ban giay</p>
        </div>
        <div className="contact-infor">
          <p>Phone number: 0343645587</p>
          <p>Email address: nguyenductrung0810@gmail.com</p>
        </div>
      </div>
      <div className="footer-infor">
        <h3 className="footer-title">About us</h3>
        <p className="footer-desc"></p>
      </div>
      <div className="footer-infor">
        <h3 className="footer-title">Open hours</h3>
        <p className="footer-desc"></p>
      </div>
      <div className="footer-infor">
        <h3 className="footer-title">Address</h3>
        <p className="footer-desc"></p>
      </div>
      <div className="footer-infor">
        <h3 className="footer-title">Follow us</h3>
        <p className="footer-desc"></p>
      </div>
    </div>
  );
};

export default Footer;
