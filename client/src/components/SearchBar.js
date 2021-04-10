import React, { useState } from "react";

const SearchBar = (props) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.search(text);
  };

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="search"
              type="text"
              onChange={(e) => setText(e.target.value)}
              autoComplete="off"
            />
            <label htmlFor="search">Search</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
