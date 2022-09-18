
let text = document.getElementById("text");
let button = document.getElementById("button");

function print1() {
    text.innerHTML += "1 ";
}

button.addEventListener('click', print1);
