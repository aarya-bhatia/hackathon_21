import React from "react";

export default function Footer(props) {
  return (
    <footer className="page-footer green">
      <div className="row">
        <div
          className=""
          style={{
            padding: 20,
          }}
        >
          <div className="col">
            <a href="!">
              <h5 className="white-text">About Us</h5>
            </a>
          </div>
          <div className="col">
            <a href="!">
              <h5 className="white-text">Help</h5>
            </a>
          </div>
          <div className="col">
            <a href="!">
              <h5 className="white-text">Contact</h5>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
