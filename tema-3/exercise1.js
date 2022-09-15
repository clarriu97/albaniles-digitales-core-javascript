
// Example with a simple validation

let found = true;

if (found) {
    console.log("Has been found");
} else {
    console.log("Has not been found");
}

switch (found) {
    case true:
        console.log("Has been found");
        break;

    default:
        console.log("Has not been found");
}

// Example with a more complex validation

let color = "blue"

if (color === "red"){
    console.log("The color is red");
} else if (color === "blue"){
    console.log("The color is blue");
} else if (color === "brown"){
    console.log("The color is brown");
} else if (color === "black"){
    console.log("The color is black");
} else {
    console.log("The color is not red, blue, brown or black");
}

switch (color){
    case "red":
        console.log("The color is red");
        break;

    case "blue":
        console.log("The color is blue");
        break;

    case "brown":
        console.log("The color is brown");
        break;

    case "black":
        console.log("The color is black");
        break;

    default:
        console.log("The color is not red, blue, brown or black")
}
