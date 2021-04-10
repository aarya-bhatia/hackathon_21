const dbName = "recipeDb";

function get(name) {
  return JSON.parse(localStorage.getItem(name));
}

function put(name, value) {
  localStorage.setItem(name, JSON.stringify(value));
}

export function addRecipe(recipe) {
  if (!get(dbName)) {
    put(dbName, [recipe]);
  } else {
    put(dbName, [...get(dbName), recipe]);
  }
}

export function removeRecipe(recipe) {
  put(
    dbName,
    get(dbName).filter((e) => e.label !== recipe.label)
  );
}

export function updateRecipe(recipe) {}
