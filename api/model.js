const config = require("config");
const fetch = require("node-fetch");

module.exports = {
 loadData = function (searchWord) {
  return new Promise((resolve, reject) => {
    fetch(getSearchURL(searchWord))
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
},

 getRecipes = function (data) {
  let arr = [];
  data.hits.forEach((e) => {
    arr = [...arr, extractRecipeData(e.recipe)];
  });
  return arr;
},

 getSearchURL = function (q) {
  return `${base_url}/search?q=${q}&app_id=${app_id}&app_key=${app_key}`;
},

 extractRecipeData = (r) => {
  return {
    label: r.label,
    image: r.image,
    instructions: r.ingredientLines,
    url: r.url,
    dietLabels: r.dietLabels,
    totalTime: r.totalTime,
    mealTypes: r.mealType,
    calories: r.calories,
    ingredients: r.ingredients,
  };
}

}
