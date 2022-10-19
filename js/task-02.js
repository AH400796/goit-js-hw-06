const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

const listOfIngredients = ingredients.map((ingredient) => {
  const elementOfList = document.createElement("li");
  elementOfList.textContent = ingredient;
  elementOfList.classList.add("item");
  return elementOfList;
});

ingredientsListRef.append(...listOfIngredients);
