const list = document.querySelector("ul");
const API_KEY = "43256839-6988dc73e83ff3bdf7562f6e8";

const params = new URLSearchParams({
    key: API_KEY,
    q: "red rose"
})

fetch(`https://pixabay.com/api/?${params}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status)
        }
        // console.log('Ok');
        return response.json()
    })
    .then(data => list.insertAdjacentHTML("beforeend", createMarkup(data.hits)))
    .catch(error => console.log("catch", error))

function createMarkup(arr) {
    return arr.map(({ id, previewURL, tags }) => `
    <li>
    <img src="${previewURL}" alt="${tags}" width="300">
    </li>`).join('')
}

// fetch() {
//     headers: {
//         autorization: `Bearer ${API_KEY}`
//     }
// }