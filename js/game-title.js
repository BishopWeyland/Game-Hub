export { queryString, params, id, url };

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = `https://willand.tech/gh_api/wp-json/wc/v3/products/${id}?consumer_key=ck_50fb01302cab00f3eb7a2adfaa8b64fc78d2188f&consumer_secret=cs_b2e4bb1c758637e4cf18f88760dd7acb8b2ba2da`;

const image = document.querySelector(".game-photo");
const productImages = document.querySelector(".product-photos");
const productInfo = document.querySelector(".flexbox-item-2");
const price = document.querySelector(".price-flex");
const title = document.querySelector("title");
const loadingContainer = document.querySelector(".loading-container");

async function getDetails() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    loadingContainer.innerHTML = "";

    image.innerHTML = `<img src="${results.images[0].src}">`;

    productImages.innerHTML = `
    <img src="${results.images[0].src}">
    <img src="${results.images[1].src}">
    <img src="${results.images[2].src}">
    <img src="${results.images[3].src}">
    <i class="fa-solid fa-plus">
    `;

    productInfo.innerHTML = `
    <h1>${results.name}</h1>
    <h2>${results.tags[0].name}</h2>
    <p>${results.description}</p>`;

    price.innerHTML = `<h3>${results.price}$</h3>
    <i class="fa-regular fa-heart favorites"></i>`;

    title.innerHTML = `${results.name} | Games | Game-Hub`;
  } catch (error) {}
}

getDetails();
