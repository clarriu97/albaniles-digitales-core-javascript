const { getDifferentValues } = require('./index');

test ('getDifferentValues', () => {
    expect(getDifferentValues(new Set([1, 2, 3]), new Set([2, 3, 4]))).toEqual(new Set([1, 4]));
    expect(getDifferentValues(new Set([1, 2, 3]), new Set([4, 5, 6]))).toEqual(new Set([1, 2, 3, 4, 5, 6]));
    expect(getDifferentValues(new Set([1, 2, 3]), new Set([3, 4, 5]))).toEqual(new Set([1, 2, 4, 5]));
});
