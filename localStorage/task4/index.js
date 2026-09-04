async function loadPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const posts = await response.json();
        const postsHtml = posts.map(post => 
            `
               <h3>${post.title}</h3>
                <p>${post.body}</p>
                <span class="post-id">ID:${post.id}</span>
            `).join("");
            document.getElementById("postsList").innerHTML = postsHtml;
    } catch (error) {
        console.log(error);
    }
}

document.getElementById("loadPosts").addEventListener("click" , loadPosts);
