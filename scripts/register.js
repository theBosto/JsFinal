function userRegister() {
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let regForm = document.getElementById("registerForm");
  let errorMessage = document.getElementById("error");

  let oldUsersData = localStorage.getItem("usersData");
  if (oldUsersData === null) {
    oldUsersData = [];
  } else {
    oldUsersData = JSON.parse(oldUsersData);
  }

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
  } else {
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
    localStorage.setItem("currentUser", JSON.stringify(user))
  }
}
