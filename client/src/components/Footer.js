import React from "react";

export default function Footer(props) {
  return (
    <div className="footer yellow darken-2">
      <div className="footer-container">
        <div
          className="footer-item"
          style={{
            marginLeft: 60,
          }}
        >
          About Us
        </div>
        <div className="footer-item">|</div>
        <div className="footer-item">Help</div>
        <div className="footer-item">|</div>
        <div className="footer-item">Contact Us</div>
      </div>
    </div>
  );
}
