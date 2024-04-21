const inputEl = document.querySelector(".js-user-name");

inputEl.addEventListener("input", handleInput);
inputEl.addEventListener("blur", handleBlur);

function handleInput(event) {
    console.log(event.currentTarget.value);
}

function handleBlur(event) {
    const name = event.target.value;
    alert(`Hello, ${name}`);
}