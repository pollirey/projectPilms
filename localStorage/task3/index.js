
async function loadUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const user = await response.json();
        document.getElementById("userCard").innerHTML = 
        `
          <h2>Имя пользователя:${user.name}</h2>
          <p>Почта:${user.email}</p>
          <p>Номер телефона:${user.phone}</p>
          <p>Компания:${user.company.name}</p>
        `
     } catch (error) {
        console.log(`Ошибка:${error}`);
    }
}

document.getElementById("loadUser").addEventListener("click" , loadUser);

function loadUser2() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json() )
    .then(user => { 
        document.getElementById("userCard").innerHTML = 
        `
          <h2>Имя пользователя:${user.name}</h2>
          <p>Почта:${user.email}</p>
          <p>Номер телефона:${user.phone}</p>
          <p>Компания:${user.company.name}</p>
        `
    }).catch(error => console.log(error));
}