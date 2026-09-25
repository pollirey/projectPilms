const bookingData = JSON.parse(localStorage.getItem("bookingData"));

if(!bookingData) {
    window.location.href = "../index.html";
}

const bookingFilmNameEl = document.getElementById("bookingFilmName");
const bookingDateEl = document.getElementById("bookingDate");
const bookingTimeEl = document.getElementById("bookingTime");
const bookingHallEl = document.getElementById("bookingHall");
const bookingStandartEl = document.getElementById("bookingStandart");
const bookingVipEl = document.getElementById("bookingVip");
const bookingStandartPriceEl = document.getElementById("bookingStandartPrice");
const bookingVipPriceEl = document.getElementById("bookingVipPrice");
const totalPriceEl = document.getElementById("totalPrice");
const cardNumberInput = document.getElementById("cardNumber");
const expiryInput = document.getElementById("expiry");
const cvcInput = document.getElementById("cvc");
const cardNameInput = document.getElementById("cardName");
console.log(bookingData);
bookingFilmNameEl.textContent = bookingData.filmName;