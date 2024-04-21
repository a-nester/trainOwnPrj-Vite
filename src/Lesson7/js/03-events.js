const form = document.querySelector(".js-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    // makarons
    // console.log(event.target.elements.email.value);
    // console.log(event.target.elements.password.value);
    // console.dir(event.target);
    const elements = event.target.elements;

    const info = {
        email: elements.email.value,
        password: elements.password.value,
        comment: elements.comment.value
    }
    console.log(info);
    event.target.reset();
}
