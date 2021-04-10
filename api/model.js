const config = require("config");
const fetch = require("node-fetch");

module.exports.loadRecipes = function (searchWord) {
  return new Promise((resolve, reject) => {
    fetch(getSearchURL(searchWord))
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

module.exports.parseData = function (data) {
  let arr = [];
  data.hits.forEach((e) => {
    const recipe = e.recipe;
    const label = recipe.label;
    const image = recipe.image;
    const instructions = recipe.ingredientLines;
    arr = [
      ...arr,
      {
        label,
        image,
        instructions,
      },
    ];
  });
  return arr;
};

function getSearchURL(q) {
  return `${base_url}/search?q=${q}&app_id=${app_id}&app_key=${app_key}`;
}
