import React from "react";

const Recipe = ({ data }) => {
  return (
    // <div>
    //   <h4>{data.label}</h4>
    //   <img src={data.image} />
    //   <p></p>
    //   <p> Time: {data.totalTime} minutes </p>
    //   <p> Calories: {Math.round(data.calories)} </p>
    //   <h4>Cooking Instructions</h4>
    //   <ul>
    //     {data.instructions.map((line) => {
    //       return <li>{line}</li>;
    //     })}
    //   </ul>
    //   <hr />
    // </div>

    <div className="card">
      <div className="card-image">
        <img src={data.image} alt={data.label} />
        <span className="card-title">{data.label}</span>
        <a
          href="!"
          className="btn-floating halfway-fab waves-effect waves-light green"
        >
          <i className="material-icons">add</i>
        </a>
      </div>
      <div className="card-content">
        <div> Time: {data.totalTime} minutes </div>
        <div> Calories: {Math.round(data.calories)} </div>
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
