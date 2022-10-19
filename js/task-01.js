const categoriesRef = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesRef.length);

categoriesRef.forEach((element) => {
  console.log("Category:", element.querySelector("h2").textContent);
  console.log("Elements:", element.querySelectorAll("li").length);
});
