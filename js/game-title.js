export { queryString, params, id, url };

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = `https://willand.tech/gh_api/wp-json/wc/v3/products/${id}?consumer_key=ck_50fb01302cab00f3eb7a2adfaa8b64fc78d2188f&consumer_secret=cs_b2e4bb1c758637e4cf18f88760dd7acb8b2ba2da`;

const image = document.querySelector(".game-photo");
const productInfo = document.querySelector(".flexbox-item-2");
const price = document.querySelector(".price-flex");

async function getDetails() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    image.innerHTML = `<img src="${results.images[0].src}">`;

    productInfo.innerHTML = `
    <h1>${results.name}</h1>
    <h2>${results.tags[0].name}</h2>
    <p>${results.description}</p>`;

    price.innerHTML = `<h3>${results.price}$</h3>
    <i class="fa-regular fa-heart favorites"></i>`;
  } catch (error) {}
}

getDetails();
