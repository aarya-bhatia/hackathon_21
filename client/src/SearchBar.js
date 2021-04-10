import React, { useState } from "react";

const SearchBar = (props) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.search(text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" width="20" onChange={handleChange} />
        <button type="submit" />
      </form>
    </div>
  );
};

export default SearchBar;
