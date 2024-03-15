let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");
let email = document.getElementById("email");
let username = document.getElementById("username");
let password = document.getElementById("password");
let showPasswordIsChecked = document.getElementById("showPassword");

let localData = localStorage.getItem("currentUser");

localData = JSON.parse(localData);

console.log(localData);

firstName.value = localData.firstName;
firstName.innerHTML = `${firstName.value}`;

lastName.value = localData.lastName;
lastName.innerHTML = `${lastName.value}`;

age.value = localData.age;
age.innerHTML = `${age.value}`;

email.value = localData.email;
email.innerHTML = `${email.value}`;

username.value = localData.username;
username.innerHTML = `${username.value}`;

password.value = localData.password;
password.innerHTML = `${password.value.replace(/[a-zA-z0-9@#$%^&*.,]/g, "*")}`;

showPasswordIsChecked.addEventListener("change", function () {
  if (this.checked) {
    password.innerHTML = `${password.value}`;
  } else {
    password.innerHTML = `${password.value.replace(
      /[a-zA-z0-9@#$%^&*.,]/g,
      "*"
    )}`;
  }
});
