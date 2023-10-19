
let question1 = "Dime el diametro de la rueda";
let question2 = "Dime el grosor de la rueda";

let diametro = prompt(question1);
let grosor = prompt(question2);

console.log(typeof diametro);
console.log(diametro);
console.log(typeof grosor);
console.log(grosor);

diametro = parseFloat(diametro)
grosor = parseFloat(grosor)

console.log(typeof diametro);
console.log(diametro);
console.log(typeof grosor);
console.log(grosor);

let textA = "";
let textB = "";
if (isNaN(diametro) || isNaN(grosor)) {
    textA = "Por favor, introduce valores numericos"
} else {
    switch (true){
        case (diametro < 0):
            textA = "¿En serio crees que un diametro puede ser negativo?";
            break;
    
        case (diametro < 0.8):
            textA = "La rueda es para un vehiculo pequeño";
            break;
    
        case (diametro < 1.4):
            textA = "La rueda es para un vehiculo mediano";
            break;
    
        default:
            textA = "La rueda es para un vehiculo grande";
    }
    
    if ((diametro > 1.4 && grosor < 0.4) || (0.8 < diametro <= 1.4 && grosor < 0.25)) {
        textB = "El grosor para esta rueda es inferior al recomendado";
    }
}

document.getElementById("textA").innerHTML = textA;
document.getElementById("textB").innerHTML = textB;
