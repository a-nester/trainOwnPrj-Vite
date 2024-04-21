/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

const items = document.querySelectorAll(".listItem");
const button = document.querySelector("#double");

button.addEventListener("click", doubleItems); 

function doubleItems(event) {
    items.forEach(item => item.textContent *= 2)
}