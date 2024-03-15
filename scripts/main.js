function logOut() {
  window.location.href = "login.html";
  history.replaceState({}, "", "login.html");

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
