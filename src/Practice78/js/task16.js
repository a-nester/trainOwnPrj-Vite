// Завдання 16
//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

const table = document.querySelector("#productTable");
const messageDiv = document.querySelector("#productDetails");

table.addEventListener("click", handleClick);

function handleClick(event) {
    if (event.target.nodeName !== "TD") return;
    const parent = event.target.parentNode;
    const product = parent.firstElementChild.textContent;
    const price = parent.lastElementChild.textContent;
    messageDiv.textContent = `Ви вибрали ${product} за ${price}`;
}