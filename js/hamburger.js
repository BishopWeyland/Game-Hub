const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".bottom_nav");

burger.addEventListener("click", () => {
  menu.classList.toggle("menu-show");
});
