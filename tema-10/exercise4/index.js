
let text = document.getElementById("text");
let animals = ["dog", "cat", "lion", "zebra", "elephant"];

function getAnimals() {
    response = "<ul>";
    animals.forEach(element => response += `<li>${element}</li>`);
    response += "</ul>\n\n";
    return response;
}

function printAnimals() {
    text.innerHTML += getAnimals();
}

setInterval(printAnimals, 2000)
