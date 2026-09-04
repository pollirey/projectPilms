
const email = document.getElementById("email");
const password = document.getElementById("password");
const result = document.getElementById("result");
const loginForm = document.getElementById("loginForm");

async function login(event) {
    event.preventDefault() 
    try {
        const response = await fetch("https://reqres.in/api/login" , {
            method: "POST" , headers:{
                "Content-Type": "application/json"
            } , 
            body: JSON.stringify({
                email: email.value , 
                password: password.value
            })

        }) 
       const data = await response.json();
        if (response.ok){
            result.innerHTML = `
            <h3>Вход выполнен</h3>
            <p>Ваш токен: ${data.token}</p>
            `
        } else {
            result.innerHTML = `
            <h3>Ошибка вход</h3>
            <p>Ваш токен: ${data.error}</p>
            `
        }
    } catch(error) {
        console.log(error);
    } 
} 

loginForm.addEventListener("submit" , login);