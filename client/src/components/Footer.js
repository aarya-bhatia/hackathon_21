import React from "react";

export default function Footer(props) {
  return (
    <div className="footer yellow darken-2">
      <div className="footer-container">
        <a href=""
          className="footer-item"
          style={{
            marginLeft: 60,
          }}
        >
          About Us
        </a>
        <div className="footer-item">|</div>
        <a href="" className="footer-item">Help</a>
        <div className="footer-item">|</div>
        <a href="" className="footer-item">Contact Us</a>
      </div>
    </div>
  );
}
