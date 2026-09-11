import {getAllData} from "/js/api.js";

let data = await getAllData();

console.log(data);

const filmsContainer = document.getElementById("filmsContainer");
const searchInput = document.getElementById("searchInput");
const films = await data.films;

function renderFilms(films) {
    filmsContainer.innerHTML = "";
    if (films.length === 0) {
        filmsContainer.innerHTML = `<p class="no-result">Фильм не найден</p> `;
        return;
    }
    films.forEach(film => {
        const filmCard = document.createElement("div");
        filmCard.classList.add("film-card");
        filmCard.innerHTML = `
        <img class="film-img" src="${film.film_poster}" alt="${film.film_name}">
                <div class="film-info">
                    <h4 class="film-name">${film.film_name}</h4>
                    <p class="film-description">${film.film_description}</p>
                    <p class="film-duration">Длительность фильма:${film.film_duration} минут</p>
                    <p class="film-origin">Страна происхождения:${film.film_origin}</p>
                </div>
        `
        filmsContainer.append(filmCard);
    });
};

function filterFilms(search) {
    if (!search || search.trim() === "") {
        return films;
    }
    const lowerCaseSearch = search.toLowerCase().trim();
    return films.filter(film => 
        film.film_name.toLowerCase().includes(lowerCaseSearch)
    );
}

function handleSearch(event) {
    const search = event.target.value;
    const filteredFilms = filterFilms(search);
    renderFilms(filteredFilms);
}

if( searchInput) {
    searchInput.addEventListener("input" , handleSearch);
}

renderFilms(films);

function initAccordion() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => { 
        header.addEventListener("click", ()  => {
            const accordionItem = header.parentElement;
            const isActive = accordionItem.classList.contains('active');
            document.querySelectorAll(".accordion-item.active").forEach(item => {
                item.classList.remove("active");
            }) 
            if (!isActive) {
                    accordionItem.classList.add("active");
            }
        })
});
}

initAccordion();
// {
//     "id": 2003,
//     "film_name": "Титаник",
//     "film_duration": 194,
//     "film_description": "Апрель 1912 года. В первом и последнем плавании шикарного «Титаника» встречаются двое. Пассажир нижней палубы Джек выиграл билет в карты, а богатая наследница Роза отправляется в Америку, чтобы выйти замуж по расчёту. Чувства молодых людей только успевают расцвести, и даже не классовые различия создадут испытания влюблённым, а айсберг, вставший на пути считавшегося непотопляемым лайнера.",
//     "film_origin": "США",
//     "film_poster": "https://shfe-diplom.neto-server.ru/storage/app/img/posters/4mJNp231NJyOV0nSSehC4k6uKT3fDF1Ma9bNTlq1.png"
// }

// у нас будет renderFilms которая принимает фильмы, и еще для поиска filterFilms
//  которая принимает то что мы вводим в инпут их 
// просто создать код внутри писать не надо мы его на занятии сделаем