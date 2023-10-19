
let question = "Introduce un número";

let number = prompt(question);
number = parseInt(number);

if (isNaN(number)) {
    console.log("Por favor, introduce un número entero");
} else {
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}
