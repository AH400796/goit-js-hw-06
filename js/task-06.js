const inputRef = document.querySelector("#validation-input");

const onBlurVerify = (event) => {
  if (event.currentTarget.value.length == inputRef.dataset.length) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
};

inputRef.addEventListener("blur", onBlurVerify);
