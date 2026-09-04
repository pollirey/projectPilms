// const textArea =  document.getElementById("noteArea");

// const savedNote = localStorage.getItem("note");

// if (savedNote) {
//   textArea.value = savedNote;
// }

// function saveNote() {
//     const noteText = textArea.value.trim();
//     localStorage.setItem("note" , noteText);
//     const message = document.getElementById("saveMessage");
//     message.classList.add("show");
//     setTimeout(() => {
//         message.classList.remove("show");
//     } , 2000 )

// }

// function clearNote() {
//     textArea.value = "";
//     localStorage.removeItem("note");
// }

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => {
//     console.log('Данные получены:');
//     console.log(data);
//   });

// Попробывать изменить число в конце ссылки: 1, 2, 3, 100
// fetch('https://jsonplaceholder.typicode.com/posts/101')
//   .then(response => response.json())
//   .then(data => console.log(data.title))  // выводим только заголовок
//   .catch(error => console.log('Ошибка:', error));