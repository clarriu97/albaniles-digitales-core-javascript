
let text = document.getElementById("text");

let seconds = 0;

function formatSeconds() {
    seconds++;
    let minutes = Math.floor(seconds / 60);
    let modulus = seconds - minutes * 60;
    let formatTime = `${minutes}:${modulus}`;
    text.innerHTML = formatTime;
}

setInterval(formatSeconds, 1000);
