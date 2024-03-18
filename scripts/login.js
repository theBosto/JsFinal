function userLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");

  let usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
  let passwordRegex = /^[a-zA-Z0-9!@#$%^&*()-_=+]{8,}$/;

  if (!usernameRegex.test(username)) {
    error.style.color = "red";
    error.textContent =
      "Username must be at least 5 characters long and can only contain letters, numbers, and underscores";
  }

  if (!passwordRegex.test(password)) {
    error.style.color = "red";
    error.textContent =
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
  }

  let usersData = localStorage.getItem("usersData");

  usersData = JSON.parse(usersData);

  if (usersData === null) {
    error.style.color = "red";
    error.textContent = "Invalid username or password";
  }

  let userExists = false;

  let loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  for (let user = 0; user < usersData.length; user++) {
    if (
      usersData[user].username === username &&
      usersData[user].password === password
    ) {
      userExists = true;
      localStorage.setItem("currentUser", JSON.stringify(usersData[user]));
    }
  }

  if (userExists === false) {
    error.style.color = "red";
    error.textContent = "Invalid username or password";
  } else {
    window.location.href = "main.html";
  }

  localStorage.setItem("usersData", JSON.stringify(usersData));
}
