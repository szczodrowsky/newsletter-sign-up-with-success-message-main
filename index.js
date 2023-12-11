const inputField = document.getElementById("input-email");
const submitBtn = document.getElementById("submit-btn");
const firstPage = document.querySelector(".first-container");
const secondPage = document.querySelector(".second-container");
const errorLabel = document.querySelector(".erorr-tittle");
const email = document.getElementById("mail");
const backButton = document.querySelector(".back-button");

var isMail = false;
let inside;
inputField.addEventListener("input", (e) => {
  inside = e.target.value;
  if (inside.includes("@")) {
    isMail = true;
    console.log(isMail);
  } else {
    isMail = false;
    console.log(isMail);
  }
});

submitBtn.addEventListener("click", () => {
  if (isMail) {
    email.textContent = inside;
    firstPage.classList.add("hide");
    secondPage.classList.remove("hide");
  } else {
    errorLabel.classList.remove("error");
    inputField.classList.add("error-field");
  }
});

backButton.addEventListener("click", () => {
  window.location.reload();
});
