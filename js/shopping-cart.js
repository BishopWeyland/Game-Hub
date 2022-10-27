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

const cartPhoto = document.querySelector(".cart-photo");
const price = document.querySelector(".item-price");
const total = document.querySelector(".total-price");

async function shoppingCart() {
  const response = await fetch(url);
  const results = await response.json();
  cartPhoto.innerHTML = `<img src="${results.images[0].src}">`;
  price.innerHTML = `
  <p> 1 x ${results.name}</p>
  <p>${results.price}$</p>`;

  const totalPrice = parseFloat(results.price);
  total.innerHTML = `
  <p>Total:</p>
  <p>${totalPrice + 10}$</p>`;
}

shoppingCart();
