

const title = document.getElementById("productTitle");
const price = document.getElementById("productPrice");
const result = document.getElementById("result");
const form = document.getElementById("productForm");

async function addProduct(event) {
    event.preventDefault() 
    try {const response = await fetch("https://dummyjson.com/products/add" , {
            method: "POST" , headers:{
                "Content-Type": "application/json"
            } , 
            body: JSON.stringify({
                title: title.value , 
                price: parseInt(price.value) 
            })

        }) 
       const data = await response.json();
        if (response.ok){
            result.innerHTML = `
            <h3>Название продукта:${data.title}</h3>
            <p>Цена: ${data.price}</p>
            `
            form.reset();
        } else {
            result.innerHTML = `
            <h3>Ошибка вывода</h3>
            <p>Цена: ${data.error}</p>
            `
        }
    } catch(error) {
        console.log(error);
    } 
} 

form.addEventListener("submit" , addProduct);
