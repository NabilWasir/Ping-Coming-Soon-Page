const btn = document.querySelector(".notify-button");
const alert = document.querySelector(".alert");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const input = document.querySelector(".email-box");

input.addEventListener("input", function () {
  if (input.value.match(emailRegex) && alert.style.display === "block") {
    input.style.borderColor = "black";
    alert.style.display = "none";
  } else {
    input.style.borderColor = "red";
    alert.style.display = "block";
  }
});
