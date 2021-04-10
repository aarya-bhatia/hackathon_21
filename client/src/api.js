const config = require("./config");

const getSearchURL = (q) => {
  return `${config.base_url}/search?q=${q}&app_id=${config.app_id}&app_key=${config.app_key}`;
};

const loadData = (searchWord) => {
  return new Promise((resolve, reject) => {
    fetch(getSearchURL(searchWord))
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

const getRecipes = (data) => {
  let arr = [];
  data.hits.forEach((e) => {
    arr = [...arr, extractRecipeData(e.recipe)];
  });
  return arr;
};

const extractRecipeData = (r) => {
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
};

exports.loadData = loadData;
exports.getRecipes = getRecipes;
