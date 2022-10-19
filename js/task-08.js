const formRef = document.querySelector(".login-form");
const inputEmailRef = document.querySelector("input[type='email']");
const inputPasswordRef = document.querySelector("input[type='password']");
const buttonSubmitRef = document.querySelector("button[type='submit']");

const onSubmit = (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("All fields must be filled!");
  }

  //   console.log(object);
  event.currentTarget.reset();
};

formRef.addEventListener("submit", onSubmit);

// buttonSubmitRef.addEventListener("submit", onSubmit);
