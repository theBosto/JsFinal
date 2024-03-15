function userLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");

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
    console.log(username, password);
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
    window.location.href = "index.html";
  }

  localStorage.setItem("usersData", JSON.stringify(usersData));
}
