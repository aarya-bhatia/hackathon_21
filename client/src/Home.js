import React from "react";
import SearchBar from "./SearchBar";
import Recipe from "./Recipe";
import { loadData, getRecipes } from "./api";

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
      <div>
        <SearchBar search={(param) => this.search(param)} />
        {this.state.recipes.map((recipe, i) => {
          return <Recipe key={i} data={recipe} />;
        })}
      </div>
    );
  }
}

export default Home;