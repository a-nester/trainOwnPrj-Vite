const btnDown = document.querySelector(".down");
const btnRight = document.querySelector(".right")
const box = document.querySelector(".js-box");

btnDown.addEventListener("click", btnFuncDown);
box.addEventListener("click", btnFuncDown);
btnRight.addEventListener("click", btnFuncRight);

let stepDown = 0;
let stepRight = 0;

function btnFuncDown() {
    stepDown += 20;
    box.style.marginTop = `${stepDown}px`;
    console.log("Click");
 };

function btnFuncRight() {
    stepRight += 20;
    box.style.marginLeft = `${stepRight}px`;
}


