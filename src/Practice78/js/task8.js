/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, 
а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

const btnContainer = document.querySelector(".statList");
const btnResult = document.querySelector("#resultButton");
const boxResult = document.querySelector("#resultSection");

btnContainer.addEventListener("click", handleClick);
btnResult.addEventListener("click", showResult);
let totalSum = 0;
let infoObj = {};

function handleClick(event) {
    
    if (!event.target.classList.contains("calcButton")) return;
    const value = event.target.dataset.number;
    totalSum += Number(value);
    const button = event.target.textContent;
    if (infoObj[button]) {
        infoObj[button] += 1;
    } else {
        infoObj[button] = 1;
    }
};

function showResult() {
    boxResult.innerHTML = `Total sum: ${totalSum}`;
    resetFunc();
    for (const elem in infoObj) {
        const infoDiv = document.createElement("div");
        infoDiv.id = "resultSection";
        infoDiv.classList.add("reset")
        infoDiv.textContent = `${elem} clicked ${infoObj[elem]}`;
        boxResult.after(infoDiv);
    }
    totalSum = 0;
    infoObj = {};
};

function resetFunc() {
    const reset = document.querySelectorAll(".reset");
    reset.forEach(elem => {
        elem.remove();
    })
}