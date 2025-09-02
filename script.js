// Select all inputs and button
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const inputs = document.querySelectorAll("input");
const button = document.getElementById("submitBtn");

// Add click event to button
button.addEventListener("click", () => {
  button.style.border = "1px solid blue";
  button.style.color = "white";
  button.style.background = "darkblue";

  // Print username & password to console
  console.log("Username:", usernameInput.value);
    console.log("Email:", emailInput.value);
  console.log("Password:", passwordInput.value);
});

