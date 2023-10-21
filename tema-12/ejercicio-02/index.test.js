const { joinSets } = require('./index');

test('joinSets', () => {
    expect(joinSets(new Set([1, 2, 3]), new Set([2, 3, 4]))).toEqual(new Set([1, 2, 3, 4]));
    expect(joinSets(new Set([1, 2, 3]), new Set([4, 5, 6]))).toEqual(new Set([1, 2, 3, 4, 5, 6]));
    expect(joinSets(new Set([1, 2, 3]), new Set([3, 4, 5]))).toEqual(new Set([1, 2, 3, 4, 5]));
});
