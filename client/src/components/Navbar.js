import React from "react";

export default function Navbar(props) {
  return (
    <div className="nav-container">
      <div className="left-panel">
        <div className="logo-container">
          <img src="assets/logo.png" alt="Logo" />
        </div>
      </div>

      <div className="middle-panel">
        <div className="middle-content-container">
          <div className="search-container">
            <span className="material-icons"></span>
            <input
              type="text"
              className="search-input"
              placeholder="Search recipes with..."
            />
          </div>

          <div className="quick-search-container">
            <div className="quick-search-item">
              <div className="chip">Veg</div>
            </div>
            <div className="quick-search-item">
              <div className="chip">Non Veg</div>
            </div>
            <div className="quick-search-item">
              <div className="chip">Non Dairy</div>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-right-panel">
        <div className="row">
          <div className="col s6">
            <span class="material-icons">person_outline</span>
          </div>
          <div className="col s6">
            <span class="material-icons">menu</span>
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <span class="material-icons">explore</span>
          </div>
          <div className="col s6">
            <span class="material-icons">favorite</span>
          </div>
        </div>
      </div>
    </div>
  );
}
