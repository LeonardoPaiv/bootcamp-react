let products;
let brands = new Set();
let types = new Set();
let isOrdered = -1;
let isOrderedRating = -1;
let isOrderedPrice = -1;
const containe = document.getElementById("container");
const productList = document.getElementById("products-card");
const clearbutton = document.getElementById("clear");
const orderbutton = document.getElementById("order");
const orderText = document.getElementById("aphl-order");
const inputName = document.getElementById("nameFilter");
const brandDropdown = document.getElementById("brandsDropdown");
const typeDropdown = document.getElementById("typeDropdown");
const arrowButtonAlph = document.getElementById("arrowButton-alph");
const ratingButton = document.getElementById("order-rating");
const pricegButton = document.getElementById("order-price");
const arrowButtonRating = document.getElementById("arrowButton-rating");
const arrowButtonPrice = document.getElementById("arrowButton-price");

const rating = (number) => {
  if (number === null)
    return `
  <i class="fa fa-star"></i>
  <i class="fa fa-star"></i>
  <i class="fa fa-star"></i>
  <i class="fa fa-star"></i>
  <i class="fa fa-star"></i>
  `;
  let rating = [];
  for (let i = 0; i < number; i++) {
    rating.push('<i class="fa fa-star checked"></i>');
  }
  if (Number.isInteger(number))
    return Object.assign(
      new Array(5).fill('<i class="fa fa-star"></i>'),
      rating
    ).join("");
  else {
    rating[rating.length - 1] =
      '<i class="fa-solid fa-star-half-stroke checked"></i>';
    return Object.assign(
      new Array(5).fill('<i class="fa fa-star"></i>'),
      rating
    ).join("");
  }
};

const templateProduct = (prod) => {
  return `
    <div class="product" id="${prod.id}">
    <div style="margin-bottom: 5px;" class="tooltip">
    <span class="tooltiptext">${
      prod.rating ? prod.rating.toFixed(1) : "0.0"
    }</span>
    ${rating(prod.rating)}
    </div>
        <img class="product-image" src="https:${prod.api_featured_image}">
        <h2>${prod.name}</h2>
        <div class="product-brands">
            <span class="brand">${prod.brand ? prod.brand : ""}</span>
            <span class="price">R$: ${
              prod.price
                ? (prod.price * 5.5).toFixed(2).replace(".", ",")
                : "0,00"
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
  adicionarEventClickAoProduct();
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
  adicionarEventClickAoProduct();
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
  adicionarEventClickAoProduct();
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
  adicionarEventClickAoProduct();
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
  adicionarEventClickAoProduct();
};

const orderByAlph = () => {
  let orderedProducts;
  if (isOrdered === 1 || isOrdered === -1) {
    orderedProducts = products.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    isOrdered = 2;
    arrowButtonAlph.className = "fas fa-arrow-down";
    orderText.textContent = "Z-A";
  } else {
    orderedProducts = products.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
    isOrdered = 1;
    arrowButtonAlph.className = "fas fa-arrow-up";
    orderText.textContent = "A-Z";
  }
  let product = "";
  for (let item of orderedProducts) {
    product += templateProduct(item);
  }
  productList.innerHTML = product;
  adicionarEventClickAoProduct();
};

const orderByPrice = () => {
  let orderedProducts;
  if (isOrderedPrice === 1 || isOrderedPrice === -1) {
    orderedProducts = products.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    });
    isOrderedPrice = 2;
    arrowButtonPrice.className = "fas fa-arrow-down";
  } else {
    orderedProducts = products.sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      }
      if (a.price < b.price) {
        return 1;
      }
      return 0;
    });
    isOrderedPrice = 1;
    arrowButtonPrice.className = "fas fa-arrow-up";
  }
  let product = "";
  for (let item of orderedProducts) {
    product += templateProduct(item);
  }
  productList.innerHTML = product;
  adicionarEventClickAoProduct();
};

const orderByRating = () => {
  let orderedProducts;
  if (isOrderedRating === 1 || isOrderedRating === -1) {
    orderedProducts = products.sort((a, b) => {
      if (a.rating < b.rating) {
        return -1;
      }
      if (a.rating > b.rating) {
        return 1;
      }
      return 0;
    });
    isOrderedRating = 2;
    arrowButtonRating.className = "fas fa-arrow-down";
  } else {
    orderedProducts = products.sort((a, b) => {
      if (a.rating > b.rating) {
        return -1;
      }
      if (a.rating < b.rating) {
        return 1;
      }
      return 0;
    });
    isOrderedRating = 1;
    arrowButtonRating.className = "fas fa-arrow-up";
  }
  let product = "";
  for (let item of orderedProducts) {
    product += templateProduct(item);
  }
  productList.innerHTML = product;
  adicionarEventClickAoProduct();
};

const adicionarEventClickAoProduct = () => {
  const productItems = document.querySelectorAll(".product");
  productItems.forEach(function (product) {
    product.addEventListener("click", function (event) {
      // Encontrar o elemento pai com a classe "product" mais próximo
      var productElement = event.target.closest(".product");

      // Verificar se foi encontrado um elemento pai com a classe "product"
      if (productElement) {
        // Obter o prod.id do elemento pai
        var productId = productElement.id;
        openDialog(productId);
        // Realizar outras ações com o prod.id conforme necessário
      }
    });
  });
};

const openDialog = async (prodId) => {
  const prodi = await products.find(i => i.id == prodId);
  let dialog = document.createElement('div');
  dialog.id = 'dialog';
  dialog.innerHTML = `
<div id="dialog-container">
  <div id="product-collumn">
    <div class="product-atribute">
      <label>Brand</label>
      <p>${prodi.brand ? prodi.brand : ''}</p>
    </div>
    <div class="product-atribute">
      <label>Price</label>
      <p>R$: ${
        prodi.price
          ? (prodi.price * 5.5).toFixed(2).replace(".", ",")
          : "0,00"
      }</p>
    </div>
    <div class="product-atribute">
      <label>Rating</label>
      <p>${prodi.rating ? prodi.rating.toFixed(1) : "0.0"}</p>
    </div>
    <div class="product-atribute">
      <label>Category</label>
      <p>${prodi.category ? prodi.category : ""}</p>
    </div>
    <div class="product-atribute">
      <label>Product type</label>
      <p>${prodi.product_type ? prodi.product_type : ""}</p>
    </div>
  </div>
  <img
    class="product-image"
    src="https:${prodi.api_featured_image}"
  />
  <button id="close-dialog">X</button>
</div>
  `;
  document.querySelector('body').appendChild(dialog)
  const closeButton = document.getElementById('close-dialog')
  closeButton.addEventListener('click', removeDialog)
  containe.classList.add('block')
};

const removeDialog = () => {
  document.getElementById('dialog').remove();
  containe.classList.remove('block')
}

clearbutton.addEventListener("click", clear);

orderbutton.addEventListener("click", orderByAlph);

ratingButton.addEventListener("click", orderByRating);

pricegButton.addEventListener("click", orderByPrice);

inputName.addEventListener("input", filterByName);

brandDropdown.addEventListener("change", filterByBrand);

typeDropdown.addEventListener("change", filterByType);

getProducts();
