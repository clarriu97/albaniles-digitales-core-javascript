
let question = "Introduce un número";
let num = prompt(question);
num = parseInt(num);

if (isNaN(num)) {
    console.log("Please introduce a number")
} else {
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            continue;
        }
        let line = "";
        for (let j = 1; j < i; j++) {
            if (j % 2 == 1) {
                line = line + j + " ";
            }
        }
        line = line.split().reverse().join(" ");
        console.log(line);
    }
}
