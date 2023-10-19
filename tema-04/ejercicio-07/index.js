
let aux_text = "";
let computed = false;

while(true) {
    let question1 = ""
    let question2 = ""

    if (computed) {
        question1 += aux_text;
        question2 += aux_text;
    }

    question1 += "\n\nIntroduce el primer factor";
    question2 += "\n\nIntroduce el segundo factor";

    let factor1 = prompt(question1);
    let factor2 = prompt(question2);

    factor1 = parseFloat(factor1);
    factor2 = parseFloat(factor2);

    if (isNaN(factor1) || isNaN(factor2)) {
        aux_text = "Por favor, introduce valores numericos";
    } else {
        product = factor1 * factor2;
        aux_text = product;
    }

    computed = true;
}
