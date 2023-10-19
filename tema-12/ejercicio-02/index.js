
function joinSets(set1, set2) {
    const joinedSet = new Set([...set1, ...set2]);
    return joinedSet;
}

console.log(joinSets(new Set([1, 2, 3]), new Set([2, 3, 4]))); // Set { 1, 2, 3, 4 }
console.log(joinSets(new Set([1, 2, 3]), new Set([4, 5, 6]))); // Set { 1, 2, 3, 4, 5, 6 }
console.log(joinSets(new Set([1, 2, 3]), new Set([3, 4, 5]))); // Set { 1, 2, 3, 4, 5 }
