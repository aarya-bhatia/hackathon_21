import React, { useState } from "react";
import { Box, Button, IconButton, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";

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
    <Box
      style={{
        padding: 10,
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField id="standard-basic" label="Search" onChange={handleChange} />
        <IconButton type="submit">
          <Search />
        </IconButton>
      </form>
    </Box>
  );
};

export default SearchBar;
