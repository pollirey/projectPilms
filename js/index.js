import {getAllData} from "/js/api.js";

let data = await getAllData();

console.log(data);

const filmsContainer = document.getElementById("filmsContainer");
const searchInput = document.getElementById("searchInput");
const allFilms = await data.films;
const allHalls = await data.halls;
const allSeances = await data.seances;


function renderFilms(films, halls, seances) {
    filmsContainer.innerHTML = "";
    if (films.length === 0) {
        filmsContainer.innerHTML = `<p class="no-result">Фильм не найден</p> `;
        return;
    }
    films.forEach(film => {
        const filmCard = document.createElement("div");
        filmCard.classList.add("film-card");
        const filmSeances = seances.filter(seance => seance.seance_filmid === film.id);
        const hallsHTML = renderHalls(halls , filmSeances, film);
        filmCard.innerHTML = `
        <img class="film-img" src="${film.film_poster}" alt="${film.film_name}">
                <div class="film-info">
                    <h4 class="film-name">${film.film_name}</h4>
                    <p class="film-description">${film.film_description}</p>
                    <p class="film-duration">Длительность фильма:${film.film_duration} минут</p>
                    <p class="film-origin">Страна происхождения:${film.film_origin}</p>
                </div>
                <div class="film-halls">${hallsHTML}</div>
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
    renderFilms(filteredFilms, allHalls, allSeances);
}

if( searchInput) {
    searchInput.addEventListener("input" , handleSearch);
}

renderFilms(allFilms, allHalls, allSeances);

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

function renderHalls(halls, filmSeances, film) {
    let hallsHTML = "";
    halls.forEach(hall => {
        const hallSeances =  filmSeances.filter(seance => seance.seance_hallid === hall.id);
        if(hallSeances.length === 0) {
            return;
        }
        hallsHTML += ` 
        <div class="hall">
        <p class="hall-name">${hall.hall_name}</p>
        <div class="time-list">
        ${hallSeances.map(seance => `
            <button class="time-item"
        data-seance-id="${seance.id}"
        data-seance-time="${seance.seance_time}"
        data-film-name="${film.film_name}"
        data-hall-id="${hall.id}"
        data-hall-name="${hall.hall_name}"
        data-hall-price-standart="${hall.hall_price_standart}"
        data-hall-price-vip="${hall.hall_price_vip}"
        >
        ${seance.seance_time}
        </button>
            `).join('') }
        
        </div>
        </div>
        `
    })
    return hallsHTML || '<p>Нет доступных залов</p>';
}


initAccordion();

function initSeancesHandler() {
    filmsContainer.addEventListener('click',(event) => {
        const btn = event.target.closest(".time-item");
        if (!btn) {
            return;
        } 
        const seanceData = {
            seanceId: btn.dataset.seanceId,
            seanceTime: btn.dataset.seanceTime,
            filmName: btn.dataset.filmName,
            hallId: btn.dataset.hallId,
            hallName: btn.dataset.hallName,
            hallPriceStandart: btn.dataset.allPriceStandart,
            hallPriceVip: btn.dataset.hallPriceVip
         }

         localStorage.setItem("seanceData" , JSON.stringify(seanceData));
         location.href = "pages/clienthall.html";
    })
}

initSeancesHandler();







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