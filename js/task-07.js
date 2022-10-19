const inputValueRef = document.querySelector("#font-size-control");
const textOutputRef = document.querySelector("#text");

const onInputFonSizeChange = (event) => {
  textOutputRef.style.fontSize = `${event.currentTarget.value}px`;
};

inputValueRef.addEventListener("input", onInputFonSizeChange);
