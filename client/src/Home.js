import React from "react";
import SearchBar from "./SearchBar";
import Recipe from "./Recipe";
import Navbar from "./Navbar";
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
                <Recipe key={i} data={recipe} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
