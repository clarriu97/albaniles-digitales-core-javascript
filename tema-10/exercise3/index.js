
let text = document.getElementById("text");
let button = document.getElementById("button");

function print1() {
    text.innerHTML += "1 ";
}

function wait() {
    setTimeout(print1, 1000);
}

button.addEventListener('click', wait);
