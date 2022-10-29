const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", onBlurVerify);

function onBlurVerify(event) {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
};


