const favourites = document.querySelectorAll(".favorites");
const popUp = document.querySelector(".favorite-pop-up");
const overlay = document.querySelector(".overlay");
const exitPopUp = document.querySelector(".continue");

for (let i = 0; i < favourites.length; i++) {
  favourites[i].addEventListener("click", () => {
    popUp.classList.toggle("show-pop-up");
    overlay.classList.toggle("show-overlay");
  });
}

exitPopUp.addEventListener("click", () => {
  popUp.classList.remove("show-pop-up");
  overlay.classList.remove("show-overlay");
});
