async function createPost(event) {
    event.preventDefault()
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts" , {
            method: "POST" , headers:{
                "Content-Type": "application/json"
            } , 
            body: JSON.stringify({
                title: title.value , 
                body: body.value ,
                userId: 1 
            })

        });
        const data = await response.json();
        result.innerHTML = `
           <h4>Пост создан</h4>
            <p>ID поста: ${data.id} </p>
            <p>Заголовок:${data.title}</p>
            <p>Текст ${data.body}</p>
        `
        postForm.reset();
    } catch (error)
    {
        console.log(error);
    }
}

const title = document.getElementById("title");
const body = document.getElementById("body");
const result = document.getElementById("result");
const postForm = document.getElementById("postForm");

postForm.addEventListener("submit" , createPost);