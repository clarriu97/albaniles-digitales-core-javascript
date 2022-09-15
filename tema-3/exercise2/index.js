
let question1 = "¿Cuantos decimales tiene el numero PI?";
let question2 = "¿De que color es el caballo blanco de Santiago?";

let response1 = prompt(question1);
let response2 = prompt(question2);

console.log(response1);
console.log(response2);

if (response1 == "infinitos" && response2 == "blanco") {
    document.getElementById("text").innerHTML = "¡¡Correcto!!";
} else {
    document.getElementById("text").innerHTML = "Tendras que probar otra vez...";
}
