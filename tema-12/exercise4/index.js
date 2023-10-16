
function isSubset(subset1, subset2) {
    return subset1.every(item => subset2.includes(item));
}

console.log(isSubset([1, 2], [1, 2, 3])); // true
console.log(isSubset([1, 2, 3], [1, 2, 3])); // true
console.log(isSubset([1, 2, 3, 4], [1, 2, 3])); // false
console.log(isSubset([1, 2, 3], [4, 5, 6])); // false
