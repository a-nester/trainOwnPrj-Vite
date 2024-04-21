const elements = {
    container: document.querySelector('.js-movie-list'),
    loadBtn: document.querySelector('.js-load-more')
}

// poster_path
// 'https://www.reelviews.net/resources/img/default_poster.jpg'
// release_date
// XXXX-XX-XX
// original_title
// Title not found
// vote_average
// XX.XX
const defaults = {
    poster: 'https://www.reelviews.net/resources/img/default_poster.jpg',
    date: 'XXXX-XX-XX',
    title: 'Title not found',
    vote: 'XX.XX'
};
let page = 1;

elements.loadBtn.addEventListener('click', handlerMore);
// const options = {
//     root: null,
//     rootmargin: 0px,
//     threshold: 1.0
// }
// const observer = new IntersectionObserver(callback, options);

function handlerMore() {
    serviceFilms(page)
        .then((data) => {
            console.log(data);
            elements.container.insertAdjacentHTML("beforeend", createMarkup(data.results));
        
            if (data.page >= data.total_pages) {
                elements.loadBtn.classList.replace('load-more', 'load-more-hiden')
            }
        })
        .catch((err) => { elements.loadBtn.classList.replace('load-more', 'load-more-hiden') });
}

function createMarkup(arr) {
    return arr.map(({ poster_path, release_date, original_title, vote_average }) => `
     <li class="movie-card">
            <img src=${poster_path ? 'https://image.tmdb.org/t/p/w300'+poster_path : defaults.poster}" alt="${original_title || defaults.title}">
            <div class="box">
                <h2>${original_title || defaults.title}</h2>
                <p>Release Date:${release_date || defaults.date}</p>
                <p>Vote Average:${vote_average || defaults.vote}</p>
            </div>
        </li>
    `).join('')
}

function serviceFilms(currentPage = '1') {
    const params = new URLSearchParams({
        page: currentPage,
        api_key: '0f572fa7e86a93b341cd4a60e7de8681'
    })
    

    return fetch(`https://api.themoviedb.org/3/trending/movie/week?${params}`)
        .then(resp => { 
        if (!resp.ok) {
        throw new Error('Error');
    }
    return resp.json();
});
}


serviceFilms()
    .then((data) => {
        console.log(data);
        elements.container.insertAdjacentHTML("beforeend", createMarkup(data.results));
        if (data.page < data.total_pages) {
            elements.loadBtn.classList.replace('load-more-hiden', 'load-more');
        }
    })
    .catch((err) => {
        elements.loadBtn.classList.replace('load-more-hiden', 'load-more')
    });
