// API DOCS: https://developer.edamam.com/edamam-docs-recipe-api

const app_id = "c5434b08";
const app_key = "ec42fbbbe8be99e54a4a816891dbb9a9";
const q = "chicken";

const url = `https://api.edamam.com/search?q=${q}&app_id=${app_id}&app_key=${app_key}`;

console.log(url);

/**

Plan
-----------------
Ingredient -> {name,expiry},
Inventory: {Ingredient i -> int quantity},
Recipes: {Ingredient i, int quantity}[]

Algorithm
-> Filter out those recipes from that match a particular number of ingredients which are in the user’s inventory.
-> Give a score to each recipe on the basis of the following:
	-> If the shelf life of item is low, the score should go up
	-> If the cost of missing ingredients is low, should make the score go up
	-> other user preferences (Time of meal etc)
-> Add the recipes to a max priority queue if the score is above a threshold
-> Send the recipes to the user 
-> If there are no recipes, start over but decrease the threshold for the number of ingredients that must match in inventory.

 */
