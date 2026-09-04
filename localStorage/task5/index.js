async function loadComment() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments/1");
        const comments = await response.json();
        const commentsHtml = `
            <h3>${comments.name}</h3>
            <p class="email">${comments.email}</p>
            <p>${comments.body}</p>
        `;
        document.getElementById("commentCard").innerHTML = commentsHtml;
    } catch (error) {
        console.log(error);
    }
}

document.getElementById("loadComment").addEventListener("click", loadComment);

  // TODO:
  // 1. Сделать запрос к https://jsonplaceholder.typicode.com/comments/1
  // 2. Вывести в #commentCard:
  //    - name в теге <h3>
  //    - email в теге <p> с классом "email"
  //    - body в теге <p>
  
  // Напишите код здесь: