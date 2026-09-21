import { getHallConfig } from "./api.js";

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
seanceTime.textContent = seanceData.seanceTime;
hallName.textContent = seanceData.hallName;
standartPrice.textContent = seanceData.hallPriceStandart;
vipPrice.textContent = seanceData.hallPriceVip;
let date = getTodayDate();
let seanceId = seanceData.seanceId;

function getTodayDate() {
    const today = new Date();
    return today.toLocaleDateString();
 }

 async function loadHall() {
    try {
        const data = await getHallConfig(seanceId , date);
        console.log(data);
        if (!data.success) {
            throw new Error("Ошибка сервера");
        }
        renderHall(data.result);
    }  catch (error) {
        console.log(error);
    }
 }

 function renderHall(data) {
    seatsContainer.innerHTML = '';
    data.forEach((row , rowIndex) => {
        const rowEl = document.createElement("div");
        rowEl.classList.add("seats-row");
        row.forEach((seatType , seatIndex) => {
            const seat = document.createElement("div");
            seat.classList.add("seat");
            seat.setAttribute("data-seat-number" , `Ряд ${rowIndex + 1}, место ${seatIndex + 1}`);
            if(seatType === "standart") {
                seat.classList.add("seat-standart");
            }
            if(seatType === "vip") {
                seat.classList.add("seat-vip");
            }
            if(seatType === "taken") {
                seat.classList.add("seat-taken");
            }
            if(seatType === "disabled") {
                seat.classList.add("seat-disabled");
            }
            if (seatType === "standart" || seatType === "vip") {
                seat.addEventListener("click" , () => {
                    seat.classList.toggle("selected");
            })
            }
            rowEl.append(seat);
        })
        seatsContainer.append(rowEl);
    })
 }

 loadHall();

 function updateTicketSummary() {
    const selectedSeats = document.querySelectorAll(".seat.selected");
    let standartCountNumber = 0;
    let vipCountNumber = 0;
    selectedSeats.forEach(seat => {
        if (seat.classList.contains("seat-standart")) {
            standartCountNumber++;
            
        } else if (seat.classList.contains("seat-vip")){
            vipCountNumber++;
        }
    })
    
    standartPrice.textContent = standartCountNumber;
    vipPrice.textContent = vipCountNumber;

    selectedSeats.forEach(seat => {
        if (seat ) {}
    })
 }



// 2) Доделать функцию updateTicketSummary мы там большую часть 
// сделали далее нужно будет нашим span в которых у нас хранятся 
// счетчики билетов через textContent подставить просто наши vipCountNumber и стандартные тоже

// 3) В этой же функции после того как подставили места мы
//  считаем финальную сумму она у нас выходит из standardCountNumber
//  и vipCountNumber каждое это значение умножаем на их цену которая
//  у нас хранится в seanceData и складываем. Потом просто так же выводим 
// в поле где у нас итог через textContent