const list = document.querySelector(".todo-list");

const params = new URLSearchParams({
    _limit: 10,
    _page : 2
})

// function foo(url) {
//     return fetch(url)
//     .then(response => {
//         if (!response.ok) {
//         throw new Error(response.ststus)
//         }
//         return response.json()
//     })
// }

function createMarkup(arr) {
    return arr.map(({ id, title, completed }) => `
    <li data-id="${id}" class="list-item">
    <input type="checkbox" ${completed && "checked"}>
    <p>${title}</p>
    </li>`
    ).join('')
}

// foo(`https://jsonplaceholder.typicode.com/todos?${params}`)
// .then(data => list.insertAdjacentHTML("beforeend", createMarkup(data)))
//     .catch(err => list.insertAdjacentHTML("beforeend", `
//     <li>
//     <p>${err}</p>
//     </li>`))
// console.log(`https://jsonplaceholder.typicode.com/todos?${params}`);

// const foo = async () => {}
// const foo = async function() {}

async function myFoo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?${params}');
    const data = await response.json();
    return data;
}

myFoo()
    .then(data => list.insertAdjacentHTML("beforeend", createMarkup(data)))


//conspect1

// const fetchUserBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');
// const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// fetchUserBtn.addEventListener("click", () => fetchUsers(BASE_URL))

// function fetchUsers(url) {
//     return fetch(url)
//         .then(response => {
//             if (!response) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         })
//         .then((users) => {
//             console.log(users);
//             userList.insertAdjacentHTML("beforeend", createMarkup(users))
//         })
//         .catch(err=> console.log(err))
// }

// function createMarkup(arr) {
//     return arr.map(({ name, email, company }) => {
//         return `
//     <p>Name: ${name} </p>
//     <p>Email: ${email} </p>
//     <p>Company: ${company.name} </p>
//             `}).join('')
// }

// conspect2


