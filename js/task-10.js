function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreateRef = document.querySelector("[data-create]");
const buttonDestroyRef = document.querySelector("[data-destroy]");
const inputRef = document.querySelector('input[type="number"]');
const divRef = document.querySelector("#boxes");

let size = 30;
let amount;

const onInput = (event) => {
  amount = event.currentTarget.value;
};

const createBoxes = () => {
  for (let i = 0; i < amount; i += 1) {
    const backgroundColor = getRandomHexColor();
    divRef.insertAdjacentHTML(
      "beforeend",
      `<div class="box" style="width: ${size}px; height: ${size}px; background-color: ${backgroundColor}"></div>`
    );
    size += 10;
  }
};

const destroyBoxes = () => {
  const removeBoxesRef = document.querySelectorAll(".box");
  removeBoxesRef.forEach((box) => box.remove());
  size = 30;
};

inputRef.addEventListener("input", onInput);
buttonCreateRef.addEventListener("click", createBoxes);
buttonDestroyRef.addEventListener("click", destroyBoxes);
