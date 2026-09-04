const button = document.getElementById("theme-btn");

const savedColor = localStorage.getItem("color");
if (savedColor === "red") {
    document.body.classList.add("red");
} else if (savedColor === "blue") {
    document.body.classList.add("blue");
} else if (savedColor === "green") {
    document.body.classList.add("green");
} 

function changeColor(color){
  document.body.classList.add(color);
  localStorage.setItem("color" , color);
}
