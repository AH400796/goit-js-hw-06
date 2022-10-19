let counterValue = 0;

const decrButtonRef = document.querySelector('[data-action="decrement"]');
const incrButtonRef = document.querySelector('[data-action="increment"]');
const counterRef = document.querySelector("#value");

const onClickIncreaseButton = () => {
  counterValue += 1;
  counterRef.textContent = counterValue;
};

const onClickDecreaseButton = () => {
  counterValue -= 1;
  counterRef.textContent = counterValue;
};

decrButtonRef.addEventListener("click", onClickDecreaseButton);
incrButtonRef.addEventListener("click", onClickIncreaseButton);
