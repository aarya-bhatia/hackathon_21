import React from "react";

export default function Navbar(props) {
  return (
    <div className="nav-container">
      <div className="nav-left-panel">
        <div className="nav-logo-container">
          <img src="" alt="Logo" />
        </div>
      </div>

      <div className="nav-middle-panel">
        <div className="nav-middle-content-container">
          <div className="nav-search-container">
            <input type="text" className="nav-search-input" />
          </div>

          <div className="nav-quick-search-container">
            <div className="nav-quick-search-item">Vegetarian</div>
            <div className="nav-quick-search-item">Vegan</div>
            <div className="nav-quick-search-item">Nonvegetarian</div>
          </div>
        </div>
      </div>

      <div className="nav-right-panel"></div>
    </div>
  );
}
