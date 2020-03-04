const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener("submit", e => {
  let messages = [];
  console.log(messages);

  if (name.value === "" || name == null) {
    messages.push("Please enter a name");
  }
  if (password.value.length <= 6) {
    messages.push("Password must have more than 6 characters");
  }
  if (password.value.length >= 20) {
    messages.push("Password must have less than 20 characters");
  }
  if (password.value == "password") {
    messages.push("password cannot be password");
  }

  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join(", ");
  }
});
