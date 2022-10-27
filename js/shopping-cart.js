import { queryString, params, id, url } from "./game-title.js";

const addCart = document.querySelectorAll("button.add-cart");
const cart = document.querySelector(".cart-container");
const exitCart = document.querySelector(".exit");

for (let i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener("click", () => {
    cart.classList.toggle("show");
  });
}

exitCart.addEventListener("click", () => {
  cart.classList.remove("show");
});
