
function getMinMax(set) {
    if (set.size === 0) {
        throw new Error('Set cannot be empty');
    }
    const min = Math.min(...set);
    const max = Math.max(...set);
    return [min, max];
}

// console.log(getMinMax(new Set([1, 2, 3]))); // [1, 3]
// console.log(getMinMax(new Set([3, 2, 1]))); // [1, 3]
// console.log(getMinMax(new Set([1, -3, 2]))); // [-3, 2]

module.exports = { getMinMax };
