function userRegister() {
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let regForm = document.getElementById("registerForm");
  let errorMessage = document.getElementById("error");

  let fnameRegex = /^[a-zA-Z]{2,50}$/;
  let lnameRegex = /^[a-zA-Z]{2,50}$/;
  let emailRegex = /^(?=.{5,254}$)[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  let usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
  let passwordRegex = /^[a-zA-Z0-9!@#$%^&*()-_=+]{8,}$/;

  if (!fnameRegex.test(firstName)) {
    errorMessage.style.color = "red";
    errorMessage.innerHTML = `Please enter a valid first name!`;
    regForm.addEventListener("submit", function (event) {
      event.preventDefault();
    });
    return;
  }

  if (!lnameRegex.test(lastName)) {
    errorMessage.style.color = "red";
    errorMessage.innerHTML = `Please enter a valid last name!`;
    regForm.addEventListener("submit", function (event) {
      event.preventDefault();
    });
    return;
  }

  if (!emailRegex.test(email)) {
    errorMessage.style.color = "red";
    errorMessage.innerHTML = "Please enter a valid email address!";
    regForm.addEventListener("submit", function (event) {
      event.preventDefault();
    });
    return;
  }

  if (!usernameRegex.test(username)) {
    errorMessage.style.color = "red";
    errorMessage.innerHTML =
      "Username must be at least 5 characters long and can only contain letters, numbers, and underscores!";
    regForm.addEventListener("submit", function (event) {
      event.preventDefault();
    });
    return;
  }

  if (!passwordRegex.test(password)) {
    errorMessage.style.color = "red";
    errorMessage.innerHTML =
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number!";
    regForm.addEventListener("submit", function (event) {
      event.preventDefault();
    });
    return;
  }

  let oldUsersData = localStorage.getItem("usersData")
    ? JSON.parse(localStorage.getItem("usersData"))
    : [];

  let usernameExists = false;
  for (let i = 0; i < oldUsersData.length; i++) {
    if (oldUsersData[i].username === username) {
      usernameExists = true;
      break;
    }
  }

  if (usernameExists) {
    errorMessage.style.color = "red";
    errorMessage.innerHTML = "This username is already used!";
    regForm.addEventListener("submit", function (event) {
      event.preventDefault();
    });
    return;
  }

  let user = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    email: email,
    username: username,
    password: password,
  };

  oldUsersData.push(user);
  localStorage.setItem("usersData", JSON.stringify(oldUsersData));
  localStorage.setItem("currentUser", JSON.stringify(user));
}
