
function filterSetByRange(set, min, max) {
    const filteredSet = new Set();
    for (const value of set) {
        if (value <= max && value >= min) {
            filteredSet.add(value);
        }
    }
    return filteredSet;
}

console.log(filterSetByRange(new Set([1, 2, 3]), 1, 2)); // Set { 1, 2 }
console.log(filterSetByRange(new Set([1, 2, 3]), 1, 3)); // Set { 1, 2, 3 }
console.log(filterSetByRange(new Set([1, 2, 3]), 2, 3)); // Set { 2, 3 }
