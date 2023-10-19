
let element = document.getElementById("text");
function print1() {
    element.innerHTML += "1 ";
    console.log("Added 1!");
}

setInterval(print1, 1000);
