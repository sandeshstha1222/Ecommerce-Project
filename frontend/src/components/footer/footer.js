import React from "react";
import "./footer.css";
import { FaDiscord, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import logo from "../../assests/logo2.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Contains">
        <div className="Map">
          <p>
            <MdLocationOn />
            Location
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d663.42744282115!2d85.32971454720527!3d27.63963921942734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1679469872428!5m2!1sen!2snp"
            width="200em"
            height="200em"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="Logo">
          <img src={logo} className="Logo" />
        </div>
        <div className="Services">
          <p style={{ textDecoration: "underline" }}>Services</p>
          <div className="List">
            <p>Gadgets</p>
            <p>Mobile Phones</p>
            <p>Tablets</p>
            <p>Laptops</p>
            <p>Electronic Accessories</p>
          </div>
        </div>
        <div className="Contact-Follow">
          <div className="Contact">
            <span>Contact Us</span>
            <p>+977984752387</p>
          </div>
          <div className="Follow">
            <div>Follow Us</div>
            <div className="Social-Media-Icons">
              <div>
                <FaFacebook className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaYoutube className="icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Copyright">
        <hr />
        <p>@{new Date().getFullYear()} Unboxing Studio. All Rights Reserved</p>
        <p>PRIVACY POLICY</p>
        <p>TERMS & CONDITIONS</p>
      </div>
    </div>
  );
};

export default Footer;
