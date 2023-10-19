
let max = 9;

for (let i = 0; i <= max; i++) {
    console.log("La tabla del " + i + " es:");
    for (j = 1; j <= 10; j++) {
        let result = i*j;
        console.log(i + " * " + j + " = " + result);
    }
}
