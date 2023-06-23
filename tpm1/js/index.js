let products;
let brands = new Set();
let types = new Set();
let isOrdered = -1;
const productList = document.getElementById("products-card");
const clearbutton = document.getElementById("clear");
const orderbutton = document.getElementById("order");
const inputName = document.getElementById("nameFilter");
const brandDropdown = document.getElementById("brandsDropdown");
const typeDropdown = document.getElementById("typeDropdown");
const arrowButton = document.getElementById("arrowButton");

const templateProduct = (prod) => {
  return `
    <div class="product" id="${prod.name}">
        <img class="product-image" src="https:${prod.api_featured_image}">
        <h2>${prod.name}</h2>
        <div class="product-brands">
            <span class="brand">${prod.brand ? prod.brand : "-"}</span>
            <span class="price">${prod.price_sign ? prod.price_sign : "R$"}: ${
    prod.price ? prod.price * 5.5 : "-"
  }</span>
        </div>
    </div>
    `;
};

const getProducts = async () => {
  const data = await fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json"
  ).then((res) => res.json());
  products = data;
  let product = "";
  for (let item of data) {
    product += templateProduct(item);
    brands.add(item.brand);
    types.add(item.product_type);
  }
  productList.innerHTML = product;
  brands = [...brands];
  for (let brand of brands) {
    let option = document.createElement("option");
    option.text = brand;
    brandDropdown.add(option);
  }
  types = [...types];
  for (let type of types) {
    let option = document.createElement("option");
    option.text = type;
    typeDropdown.add(option);
  }
};

const clear = () => {
  let product = "";
  for (let item of products) {
    product += templateProduct(item);
  }
  productList.innerHTML = product;
  inputName.value = "";
  brandDropdown.value = "";
  typeDropdown.value = "";
};

const filterByName = () => {
  let name = inputName.value;
  let filteredProducts = products.filter((item) =>
    item.name.toLocaleLowerCase().includes(name)
  );
  let product = "";
  for (let item of filteredProducts) {
    product += templateProduct(item);
  }
  productList.innerHTML = product;
};

const filterByBrand = () => {
  let selectedBrand = brandDropdown.value;
  let filteredProducts = products.filter((item) =>
    item.brand ? item.brand.includes(selectedBrand) : item
  );
  let product = "";
  for (let item of filteredProducts) {
    product += templateProduct(item);
  }
  productList.innerHTML = product;
};

const filterByType = () => {
  let selectedType = typeDropdown.value;
  let filteredProducts = products.filter((item) =>
    item.product_type.includes(selectedType)
  );
  let product = "";
  for (let item of filteredProducts) {
    product += templateProduct(item);
  }
  productList.innerHTML = product;
};

const orderByAlph = () => {
  let orderedProducts;
  if (isOrdered === 1 || isOrdered === -1) {
    orderedProducts = [...products.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })];
    isOrdered = 2;
    arrowButton.className = "fas fa-arrow-down";
  } else {
    orderedProducts = [...products.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    })];
    isOrdered = 1;
    arrowButton.className = "fas fa-arrow-up";
  }
  let product = "";
  for (let item of orderedProducts) {
    product += templateProduct(item);
  }
  productList.innerHTML = product;
};

clearbutton.addEventListener("click", clear);

orderbutton.addEventListener("click", orderByAlph);

inputName.addEventListener("input", filterByName);

brandDropdown.addEventListener("change", filterByBrand);

typeDropdown.addEventListener("change", filterByType);

getProducts();
