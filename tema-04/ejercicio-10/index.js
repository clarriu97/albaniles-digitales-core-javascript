
let question = "Introduce un número o un texto";
let answer = prompt(question);
let isNum = isNaN(parseInt(answer));

if (isNum) {
    for (let i = 1; i < answer; i++) {
        console.log("Divisores de " + answer + ":");
        if (answer % i == 0) {
            console.log(i);
        }
    }
} else {
    for (let i = 0; i < answer.length; i++) {
        console.log(answer.charAt(i));
    }
}
