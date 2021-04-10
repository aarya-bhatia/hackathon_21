const config = require("./config");

export const loadData = (searchWord) => {
  return new Promise((resolve, reject) => {
    fetch(this.getSearchURL(searchWord))
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const getRecipes = (data) => {
  let arr = [];
  data.hits.forEach((e) => {
    arr = [...arr, this.extractRecipeData(e.recipe)];
  });
  return arr;
};

export const getSearchURL = (q) => {
  return `${config.base_url}/search?q=${q}&app_id=${config.app_id}&app_key=${config.app_key}`;
};

export const extractRecipeData = (r) => {
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
