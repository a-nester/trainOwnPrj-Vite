import axios from "axios"

const elements = {
    container: document.querySelector('.js-movie-list'),
    guard: document.querySelector('.js-guard')
}

const BASE_URL = 'https://api.themoviedb.org/3';
const END_POINT = '/trending/movie/week';


let currentPage = 499;

let options = {
  root: null,
  rootMargin: "300px",
  threshold: 0,
};

let observer = new IntersectionObserver(autoPagination, options);

const defaults = {
    poster: 'https://www.reelviews.net/resources/img/default_poster.jpg',
    date: 'XXXX-XX-XX',
    title: 'Title not found',
    vote: 'XXXX'
}
 
async function serviceMovie(currentPage = 1) {
    const { data } = await axios({
        method: 'GET',
        url: `${BASE_URL}${END_POINT}`,
        params: {page: currentPage},
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjU3MmZhN2U4NmE5M2IzNDFjZDRhNjBlN2RlODY4MSIsInN1YiI6IjY2MTU5OGVkOGVlMGE5MDE3ZWE1YWQ4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4xyLjFeUC0brGiMOK3r0HVQWM4MxPSUQI3Gt8NJ5St0'
  }
    });
    return data;
}

function createMarkup(arr) {
    return arr.map(({ id, original_title, poster_path, release_date, vote_average }) => {
        return `<li class="movie-card" data-id="${id}">
            <img  
            src="${poster_path ? 'https://image.tmdb.org/t/p/w300'+poster_path : defaults.poster}" 
            alt="${original_title || defaults.title}">
            <div class="box">
                <h2>Title:${original_title || defaults.title}</h2>
                <p>Relese date:${release_date || defaults.date}</p>
                <p>Vote average:${vote_average || defaults.vote}</p>
            </div>
        </li>
        `
    }).join('');
}

serviceMovie(currentPage)
    .then(data => {
        console.log(data);
        elements.container.insertAdjacentHTML('beforeend', createMarkup(data.results));
        if (data.page < 500) {
            observer.observe(elements.guard);
        }
    })
    .catch(error => alert(error.message))

function autoPagination(entries, observer) {
    entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
            currentPage++
            try {
                const data = await serviceMovie(currentPage);
                elements.container.insertAdjacentHTML('beforeend', createMarkup(data.results))
                // console.log(data);
                if (data.page >= 500) {
                    observer.unobserve(entry.target);
                }
            } catch (error) {
                alert(error.message)
            }
        }
    });
}