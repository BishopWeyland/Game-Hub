import { queryString, params, id, url } from "./game-title.js";

const backButton = document.querySelector("#backButton");

backButton.addEventListener("click", () => {
  history.back();
});

if (document.referrer.includes("search.html")) {
  backButton.innerHTML = "Search results >";
} else {
  backButton.style.display = "none";
}

const breadcrumb = document.querySelector(".breadcrumb-title");

async function getBreadcrumbs() {
  const response = await fetch(url);
  const results = await response.json();
  breadcrumb.innerHTML = `<p>${results.name}</p>`;
}

getBreadcrumbs();
