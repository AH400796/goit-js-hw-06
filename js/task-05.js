// const nameInputRef = document.querySelector("#name-input");
// const nameOutputRef = document.querySelector("#name-output");

// const onInput = ({ currentTarget }) => {
//   nameOutputRef.textContent = currentTarget.value;

//   if (!nameOutputRef.textContent) {
//     nameOutputRef.textContent = "Anonymous";
//   }
// };

// nameInputRef.addEventListener("input", onInput);

const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.span.textContent = event.currentTarget.value;

  if (!refs.span.textContent) {
    refs.span.textContent = "Anonymous";
  }
}
