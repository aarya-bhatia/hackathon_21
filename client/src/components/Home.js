import React from "react";
import SearchBar from "./SearchBar";
import Recipe from "./Recipe";
import Navbar from "./Navbar";
import { loadData, getRecipes } from "../api";

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

        console.log(this.state.recipes);
      })
      .catch((err) => console.log(err));
  };

  handleAddRecipe = (recipe) => {
    // addRecipe(recipe);
    // this.setState((prevState) => {
    //   return {
    //     recipes: prevState.recipes.filter((r) => r.label !== recipe.label),
    //   };
    // });
    console.log(this.state.recipes.filter((r) => r.label !== recipe.label));
  };

  render() {
    return (
      <div
        style={{
          height: 0.9 * window.innerHeight,
        }}
      >
        <Navbar />
        <div
          className="container"
          style={{
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <SearchBar search={(param) => this.search(param)} />
        </div>
        <div className="container">
          <div className="row">
            {this.state.recipes.map((recipe, i) => (
              <div className="col s4">
                <Recipe
                  key={recipe.image}
                  data={recipe}
                  addRecipe={(r) => this.handleAddRecipe(r)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
