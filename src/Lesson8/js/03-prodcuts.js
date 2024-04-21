const products = [
    {
      id: 1,
      img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
      name: "Monitor",
      price: 3000,
      description: "23-inch monitor with Full HD resolution.",
    },
    {
      id: 2,
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
      name: "Laptop",
      price: 20000,
      description:
        "Lightweight and powerful laptop with a 15-inch display and SSD.",
    },
    {
      id: 3,
      img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
      name: "Smartphone",
      price: 8000,
      description: "Equipped with a triple camera and a multi-core processor.",
    },
    {
      id: 4,
      img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
      name: "Tablet",
      price: 12000,
      description: "10-inch tablet with high performance and a Retina display.",
    },
];

const container = document.querySelector(".products");
container.insertAdjacentHTML("beforeend", createMarkup(products));
container.addEventListener("click", handleClick);

function createMarkup(arr) {
  return arr
    .map((product) =>
      `<li data-id="${product.id}" class="item product-item">
      <img src="${product.img}" alt="${product.name}" width="300">
      <h2>${product.name}</h2>
      <p>Price: ${product.price}UAH</p>
      </li>
      `)
    .join("");
}

function handleClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }

  const currentProduct = event.target.closest(".product-item");
  const productId = currentProduct.dataset.id;
  const product = products.find(item => item.id === Number(productId))

  const instance = basicLightbox.create(`
  <div class="modal">
    <img src="${product.img}" alt="${product.name}">
    <h2>${product.name}</h2>
    <h3>${product.price}UAH</h3>
    <p>${product.description}</p>
  </div>
  `);

  instance.show();
}

