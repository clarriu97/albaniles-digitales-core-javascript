
let question = "¿De que quieres saber el precio?";

let response = prompt(question);
response = response.toLowerCase()
console.log(response);

let text = "";

switch (response){
    case "zapatillas":
        text = 45;
        break;

    case "camiseta":
        text = 20;
        break;

    case "pantalones":
        text = 35;
        break;

    case "camisa":
        text = 50
        break

    case "abrigo":
        text = 120
        break

    default:
        text = "No disponemos de ese artículo, lo sentimos mucho."
}

document.getElementById("text").innerHTML = text;
