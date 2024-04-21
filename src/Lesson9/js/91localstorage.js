const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;
const localStorageKey = "example-message";

textarea.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", (event) => {
    localStorage.setItem(localStorageKey, event.target.value);
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target.elements.message.value);
    form.reset();
    localStorage.removeItem(localStorageKey)
})