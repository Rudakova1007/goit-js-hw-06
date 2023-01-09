const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListElement = document.getElementById("ingredients");
for(let i = 0; i < ingredients.length; i += 1){
  let itemElement = document.createElement("li");
  itemElement.classList.add("item");
  itemElement.textContent = ingredients[i];
  ingredientsListElement.append(itemElement);
}

