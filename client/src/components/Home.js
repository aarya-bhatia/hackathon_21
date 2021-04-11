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
      <div>
        <Navbar search={(param) => this.search(param)} />
        <div className="container">
          {this.state.recipes.length > 0 && (
            <h5 className="center-align red-text lighten-4">
              RECIPES USING YOUR INVENTORY
            </h5>
          )}
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
