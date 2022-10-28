const url =
  "https://willand.tech/gh_api/wp-json/wc/v3/products?consumer_key=ck_50fb01302cab00f3eb7a2adfaa8b64fc78d2188f&consumer_secret=cs_b2e4bb1c758637e4cf18f88760dd7acb8b2ba2da";
const productGrid = document.querySelectorAll("#grid");

async function getProducts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    for (let i = 0; i < productGrid.length; i++) {
      results.forEach(function (results) {
        productGrid[
          i
        ].innerHTML += `<div class="product-card"><a href="game-title.html?id=${results.id}"><img src="${results.images[0].src}"> <h3>${results.name}</h3>
      <div class="inner-grid">
      <p class="price">${results.price}$</p></a>
      <i class="fa-regular fa-heart favorites"></i>
      `;
      });
    }
  } catch (error) {}
}

getProducts(url);
