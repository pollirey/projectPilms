
const filmName = document.getElementById("film-name");
const seanceTime = document.getElementById("seance-time");
const hallName = document.getElementById("hall-name");
const hallContainer = document.getElementById("hall-container");
const seatsContainer = document.getElementById("seats-container");
const standartPrice = document.getElementById("standart-price");
const vipCount = document.getElementById("vip-count");
const vipPrice = document.getElementById("vip-price");
const standartCount = document.getElementById("standart-count");
const totalPrice = document.getElementById("total-price");
const bookBtn = document.getElementById("book-btn");

const seanceData = JSON.parse(localStorage.getItem("seanceData"));
console.log(seanceData);
filmName.textContent = seanceData.filmName;