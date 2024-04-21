// axios(BASE_URL, {
//     params: {
//         limit: 2,
//         page: 5
//     },
//     headers: {
//         api_key
//     }
// })
//     .then(response => console.log(response.data))
//     .catch(err => console.log(err.message))

// axios.post(BASE_URL, {
//     title: "Buy a bread",
//     completed: false
// })
//     .then(({ data }) => console.log(data))
// .catch(err => console.log(err))


// axios({
//     url: BASE_URL,
//     method: "POST",
//     headers: {
//         "Content-Type": "aplication/json"
//     },
//     data: {
//         title: "Buy chocolate",
//         completed: false
//     }
// })
//     .then(({ data }) => console.log(data))
//     .catch(err => console.log(err))

// axios({
//     url: `${BASE_URL}/1010`,
//     method: "PATCH",
//     data: {
//         completed: true
//     }
// })
//     .then(({ data }) => console.log(data))
//     .catch(err => console.log(err))
// .finally(() => console.log('Ok'))

// axios.delete(`${BASE_URL}/68c6`)
//     .then(response = console.log(response))
//     .catch(err => console.log(err.message))

// async function foo() {
//     try {
//         const { data } = await axios(BASE_URL);
//         container.insertAdjacentHTML("beforeend", JSON.stringify(data))
//         console.log(data);
//     } catch (error) {
//         alert(error.message)
//     }
//     console.log('ok');
// }

// async function foo() {
//     const response = await axios(BASE_URL);
//     return response.data;
// }

// foo()
//     .then(data => container.insertAdjacentHTML("beforeend", JSON.stringify(data)))
// .catch(err => alert(err.message))

// async function foo() {
//     const response = await axios(BASE_URL);
//     return response;
// }

// async function render() {
//     try {
//         const data = await foo();
//         container.insertAdjacentHTML("beforeend", JSON.stringify(data));
//     } catch (error) {
//         alert(error);
//     }
// }
// render()
import axios from "axios";
import "../css/style.css"

const BASE_URL = "http://localhost:3000/todos";
const form = document.querySelector(".todo__form");
const container = document.querySelector(".list");


form.addEventListener('submit', handleSubmit);
container.addEventListener('click', handleDelete);
container.addEventListener('click', handleUpdate);

render();

async function serviceTodos(options = {}) {
    const { data } = await axios(options);
    return data;
}

function createMarkup(arr) {
    return arr.map(({ id, title, completed }) => `
    <li data-id="${id}" class="list__item">
            <input type="checkbox" class="list__checkbox" ${completed && "checked"}>
            <h2 class="list__title">${title}</h2>
            <button class="list__btn">x<?button>
        </li>
    `
    )
    .join('')
}

async function render() {
    try {
        const todos = await serviceTodos({ url: BASE_URL });
        container.insertAdjacentHTML("beforeend", createMarkup(todos))
    } catch (error) {
        alert(error.message)
    }
}
    
async function handleSubmit(event) {
    event.preventDefault();
    
    const { todo } = event.currentTarget.elements;
    console.log(todo.value);
    try {
        const data = await serviceTodos({
            method: "POST",
            url: BASE_URL,
            data: {
                title: todo.value,
                completed: false
            }
        });
        container.insertAdjacentHTML("beforeend", createMarkup([data]) )
    } catch (err) {
        alert(err.message)
    } finally {
        form.reset();
    }
}

async function handleUpdate(event) {
    const delBtn = event.target;
    if (!delBtn.classList.contains('list__checkbox')) {
        return;
    }
    event.preventDefault();
    const parentId = delBtn.closest('.list__item').dataset.id;

    try {
        const toDo = await serviceTodos({
            method: "PATCH",
            url: `${BASE_URL}/${parentId}`,
            data: {
                    completed: event.target.checked
                }
        });
        console.log(toDo);
        event.target.checked = toDo.completed;
    } catch (err) {
        alert(err.message);
    }
}

async function handleDelete(event) {
    const delBtn = event.target;
    if (!delBtn.classList.contains('list__btn')) {
        return;
    }
    const parent = delBtn.closest('.list__item');
    const id = parent.dataset.id;
    try {
        await serviceTodos({
            method: "DELETE",
            url: `${BASE_URL}/${id}`
        });
        parent.remove();
    } catch (error) {
        alert(error.message);
    }
}