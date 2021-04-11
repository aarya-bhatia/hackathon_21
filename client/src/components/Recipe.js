import React from "react";

const Recipe = ({ data, addRecipe }) => {
  function handleClick() {
    console.log("Adding: ", data);
    addRecipe(data);
  }

  return (
    <div className="card">
      <div className="card-image">
        <img src={data.image} alt={data.label} />
        <span className="card-title">{data.label}</span>
        <a
          href="!"
          className="btn-floating halfway-fab waves-effect waves-light green"
        >
          <button className="btn-floating" onClick={handleClick}>
            <i className="material-icons">add</i>
          </button>
        </a>
      </div>
      <div className="card-content">
        <div> Time: {data.totalTime} minutes </div>
        <div> Calories: {Math.round(data.calories)} </div>
        
        <div> Meal: {data.mealTypes} </div>

        {/* <div>Cooking Instructions</div>
        <ul>
          {data.instructions.map((line) => {
            return <li>{line}</li>;
          })}
        </ul> */}
      </div>
    </div>
  );
};

export default Recipe;
