
function getDifferentValues(set1, set2) {
    const difference = new Set(set1);
    for (const value of set2) {
        if (difference.has(value)) {
            difference.delete(value);
        } else {
            difference.add(value);
        }
    }
    return difference;
}

console.log(getDifferentValues(new Set([1, 2, 3]), new Set([2, 3, 4]))); // Set { 1, 4 }
console.log(getDifferentValues(new Set([1, 2, 3]), new Set([4, 5, 6]))); // Set { 1, 2, 3, 4, 5, 6 }
console.log(getDifferentValues(new Set([1, 2, 3]), new Set([3, 4, 5]))); // Set { 1, 2, 4, 5 }
