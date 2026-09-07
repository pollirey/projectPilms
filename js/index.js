import {getAllData} from "/js/api.js";

let data = await getAllData();

console.log(data);

const films = document.getElementById("filmsContainer");
const search = document.getElementById("searchInput");

async function renderFilms(films) {
    
};

async function filterFilms(search) {
    
}

// у нас будет renderFilms которая принимает фильмы, и еще для поиска filterFilms
//  которая принимает то что мы вводим в инпут их 
// просто создать код внутри писать не надо мы его на занятии сделаем