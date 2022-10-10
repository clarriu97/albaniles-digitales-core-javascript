
let text = document.getElementById("text");
let button = document.getElementById("button");

let seconds = 0;

function formatSeconds() {
    seconds++;
    let minutes = Math.floor(seconds / 60);
    let modulus = seconds - minutes * 60;
    let formatTime = `${minutes}:${modulus}`;
    text.innerHTML = formatTime;
}

let play = true;

button.onclick = function() {
    if (play) {
        chronometer = setInterval(formatSeconds, 10);
    } else {
        clearInterval(chronometer);
    }
    play = !play;
}
