
function bigFunc(element) {
  let newArray = new Array(700).fill('♥');
  return newArray[element];
}

console.log(bigFunc(599));
console.log(bigFunc(670));
