
function getCommonValues(set1, set2) {
    let commonValues = new Set();
    for (let value of set1) {
        if (set2.has(value)) {
            commonValues.add(value);
        }
    }
    return commonValues;
}

console.log(getCommonValues(new Set([1, 2, 3]), new Set([2, 3, 4]))); // Set { 2, 3 }
console.log(getCommonValues(new Set([1, 2, 3]), new Set([4, 5, 6]))); // Set {}
console.log(getCommonValues(new Set([1, 2, 3]), new Set([3, 4, 5]))); // Set { 3 }

module.exports = { getCommonValues };
