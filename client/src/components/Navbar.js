import React from "react";

export default function Navbar(props) {
  return (
    <nav className="teal">
      <div className="nav-wrapper navbar container">
        <ul id="nav-mobile" className="right hide-on-small-and-down">
          <li>
            <a href="!">
              <span className="fa fa-home fa-lg" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a className="navbar-action" href="!">
              <span className="fa fa-bookmark fa-lg" aria-hidden="true"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
