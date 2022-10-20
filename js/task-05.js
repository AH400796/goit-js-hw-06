const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

const onInput = ({ currentTarget }) => {
  nameOutputRef.textContent = currentTarget.value;

  if (!nameOutputRef.textContent) {
    nameOutputRef.textContent = "Anonymous";
  }
};

nameInputRef.addEventListener("input", onInput);
