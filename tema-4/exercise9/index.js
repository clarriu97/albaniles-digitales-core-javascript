
let question = "Cuántos números quieres?";
let nums = prompt(question);
nums = parseInt(nums);

badResponse = "Introduce números enteros";

sum = 0;

if (isNaN(nums)) {
    console.log(badResponse);
} else {
    let numQuestion = "Introduce un número";
    for (let i = 0; i < nums; i++) {
        let num = prompt(numQuestion);
        num = parseFloat(num);
        if (isNaN(num)) {
            console.log(badResponse);
        } else {
            sum += num;
        }
    }
    console.log(sum);
}
