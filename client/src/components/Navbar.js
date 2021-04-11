import React, { useState } from "react";

export default function Navbar(props) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.search(text);
  };

  return (
    <div className="nav-container">
      <div className="left-panel">
        <div className="logo-container">
          <span class="large material-icons">restaurant</span>
        </div>
      </div>

      <div className="middle-panel">
        <div className="middle-content-container">
          <form
            style={{
              padding: 0,
              margin: 0,
            }}
            onSubmit={handleSubmit}
          >
            <div className="search-container input-field">
              <span class="material-icons prefix">search</span>
              <input
                type="text"
                className="search-input"
                placeholder="Search recipes with..."
                onChange={(e) => setText(e.target.value)}
              />
            </div>
          </form>
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
          <div className="col offset-s2 s4">
            <span class="material-icons">menu</span>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col s6">
            <span class="material-icons">explore</span>
          </div>
          <div className="col offset-s2 s4">
            <span class="material-icons">favorite</span>
          </div>
        </div>
      </div>
    </div>
  );
}
