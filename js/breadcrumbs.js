const toGameTitle = document.querySelector(".to-game-title");
const breadCrumbs = document.querySelector(".from-search");
const backButton = document.querySelector("#backButton");

backButton.addEventListener("click", () => {
  history.back();
});

if (document.referrer.includes("search.html")) {
  backButton.innerHTML = "> Search results";
} else {
  backButton.style.display = "none";
}
