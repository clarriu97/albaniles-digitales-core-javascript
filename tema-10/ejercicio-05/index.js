
let text = document.getElementById("text")

let question = "Please give me a numerical value that represent seconds";
value = prompt(question);
value = parseInt(value);

function print_warning(time) {
    alert(`Time has gone! You have reached ${time} seconds`)
}

if (isNaN(value)) {
    text.innerHTML = "Please enter a numerical value";
} else {
    valueMs = value * 1000
    setTimeout(function() {
        print_warning(value);
    }, valueMs)
}
