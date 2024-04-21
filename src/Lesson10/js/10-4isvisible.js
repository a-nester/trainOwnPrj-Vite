const DELAY = 3000;
const notification = document.querySelector(".js-alert");
let timerId = null;

showNotification();

notification.addEventListener("click", handleClick);

function handleClick() {
    hideNotification();
    clearTimeout(timerId);
}
function showNotification() {
    notification.classList.add("is-visible");
    setTimeout(() => {
        console.log("timer");
        hideNotification();
    }, DELAY)
}

function hideNotification() {
    notification.classList.remove("is-visible");
}