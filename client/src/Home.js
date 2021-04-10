import React from "react";
import SearchBar from "./SearchBar";
import Recipe from "./Recipe";
import { loadData, getRecipes } from "./api";
import { Box, Grid, GridList, GridListTile } from "@material-ui/core";

console.log("hello");

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
    };
  }

  search = (param) => {
    loadData(param)
      .then((data) => {
        this.setState({
          recipes: getRecipes(data),
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Box
        style={{
          flexGrow: 1,
        }}
      >
        <SearchBar search={(param) => this.search(param)} />

        <Grid container spacing={3}>
          {this.state.recipes.map((recipe, i) => (
            <Grid item xs={4}>
              <Recipe key={i} data={recipe} />;
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}

export default Home;
