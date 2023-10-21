const { isSubset } = require('./index');

test('isSubset', () => {
    expect(isSubset([1, 2], [1, 2, 3])).toBe(true);
    expect(isSubset([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isSubset([1, 2, 3, 4], [1, 2, 3])).toBe(false);
    expect(isSubset([1, 2, 3], [4, 5, 6])).toBe(false);
});
