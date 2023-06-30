const container = document.querySelector(".container");
const signUpBtn = document.querySelector("#signUpBtn");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});
