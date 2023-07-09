//setup date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// setup nav
const navBtn = document.getElementById("nav-btn");
const navBar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

// show nav
navBtn.addEventListener("click", () => {
  navBar.classList.add("showNav");
  navBtn.classList.add("hideBtn");
});

// close nav
navClose.addEventListener("click", () => {
  navBar.classList.remove("showNav");
  navBtn.classList.remove("hideBtn");
});
