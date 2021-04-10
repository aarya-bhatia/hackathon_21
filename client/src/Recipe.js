import React from "react";

const Recipe = ({ data }) => {
  return (
    <div>
      <h4>{data.label}</h4>
      <img src={data.image} />
      <p>
        <a href={data.url}>Full Recipe</a>
      </p>
      <p> Time: {data.totalTime} minutes </p>
      <p> Calories: {Math.round(data.calories)} </p>
      <h4>Cooking Instructions</h4>
      <ul>
        {data.instructions.map((line) => {
          return <li>{line}</li>;
        })}
      </ul>
      <hr />
    </div>
  );
};

export default Recipe;
