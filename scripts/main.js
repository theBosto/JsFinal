function logOut() {
  window.location.href = "index.html";
  history.replaceState({}, "", "index.html");

  localStorage.setItem("currentUser", "");
}

function readMore(index) {
  let moreText = document.getElementsByClassName("more")[index - 1];
  let btnText = document.getElementsByClassName("card_btn")[index - 1];

  if (moreText.style.display === "none" || moreText.style.display === "") {
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  } else {
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  }
}

let burger = document.querySelector(".burger_icon");
let menu = document.getElementById("menu");

function show() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
