
// EXPRESSIONS AND STATEMENTS

var nested_object = { property1: { stringie: "hola" }, property2: 2.3 };

var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var sparseArray = [1, , , , 5];

var suma = function(a, b) { return a * b; };
suma(4, 5);
suma(18, 229);

var a = { b: {} };
a.b?.c?.d;  // => undefined

new Date;

var increment_var = 5;
increment_var++;
increment_var;

4 && 5;
0 && 2;
0 || 2;
0 || 0;

"3" == 3;
"3" === 3;


var point = {x: 1, y: 1};  // Define an object
"x" in point;              // => true: object has property named "x"
"z" in point ;             // => false: object has no "z" property.
"toString" in point;       // => true: object inherits toString method

var data = [7,8,9];        // An array with elements (indices) 0, 1, and 2
"0" in data;               // => true: array has an element "0"
1 in data;                 // => true: numbers are converted to strings
3 in data;                 // => false: no element 3


i = j = k = 0;             // Initialize 3 variables to 0

var suerte = 1;
suerte++;                  // ¿cual es la diferencia entre este y el siguiente? Búscalo por internet!
++suerte;

eval("3*5");