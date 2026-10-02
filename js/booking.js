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
const seatsListEl = document.getElementById("seatsList");
const paymentFormEl = document.getElementById("paymentForm");
const btnHomeEl = document.getElementById("btnHome")
const successModalEl = document.getElementById("successModal");
console.log(bookingData);
bookingFilmNameEl.textContent = bookingData.filmName;
bookingDateEl.textContent = bookingData.date;
bookingTimeEl.textContent = bookingData.seanceTime;
bookingHallEl.textContent = bookingData.hallName;
bookingStandartEl.textContent = bookingData.standartCount;
bookingVipEl.textContent = bookingData.vipCount;
bookingStandartPriceEl.textContent = bookingData.standartPrice;
bookingVipPriceEl.textContent = bookingData.vipPrice;
totalPriceEl.textContent = bookingData.totalCoast;

bookingData.selectedSeats.forEach(seat => {
    const seatBadge = document.createElement("span");
    seatBadge.classList.add("seat-badge");
    seatBadge.classList.add(seat.type);
    seatBadge.textContent = seat.number || `Ряд: ${seat.row} , место: ${seat.seat}`;
    seatsListEl.append(seatBadge);
});

expiryInput.addEventListener("input" , function() {
    let value = this.value.replace(/\D/g,'');
    if (value.length > 4) {
        value = value.slice(0 , 4);
    }
     if (value.length > 2) {
        this.value = value.slice(0 , 2) + "/" + value.slice(2);
     } else {
        this.value = value;
     }
});

cvcInput.addEventListener("input" , function() {
    this.value = this.value.replace(/\D/g,'').slice(0 , 3);
});

cardNameInput.addEventListener("input" , function() {
    this.value = this.value.toUpperCase();
});

cardNumberInput.addEventListener("input" , function() {
    let value = this.value.replace(/\D/g,'');
    if(value.length > 16) {
        value = value.slice(0 , 16);
    };
    let formattedValue = "";
    for (let i = 0; i < value.length; i++) {
        if(i > 0 && i % 4 === 0) {
            formattedValue += " ";
        }
        formattedValue += value[i];
    }
    this.value = formattedValue;
});

paymentFormEl.addEventListener("submit" , function(e) {
    e.preventDefault();
})

function validateForm() {
    const cardNumber = cardNumberInput.value.replace(/\s/g, "");
    const cardExpiry = expiryInput.value;
    const cardCvc = cvcInput.value;
    const cardName = cardNameInput.value.trim();
    if ( cardNumber.length !== 16) {
        alert("Введите корректный номер карты");
        return false;
    } 
    if (!cardExpiry.match(/^\d{2}\/\d{2}$/)) {
        alert("Введите срок действия карты в формате MM/ГГ");
    }

    if ( cardCvc.length !== 3) {
        alert("Введите корректный CVC");
        return false;
    } 
    if (cardName.length < 3) {
     alert("Введите имя владельца карты");
     return false;
    }
    return true;
}


paymentFormEl.addEventListener("submit" , function(e) {
    e.preventDefault();
    if (!validateForm()) {
        return;
    } 
    successModalEl.classList.add("active");
})

btnHomeEl.addEventListener("click" , function() {
    window.location.href = "../index.html";
} )

successModalEl.addEventListener("click" , function(e) {
    if( e.target === successModalEl) {
        window.location.href = "../index.html";
    }
})



