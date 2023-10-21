const { getCommonValues } = require('./index');

test('getCommonValues', () => {
    expect(getCommonValues(new Set([1, 2, 3]), new Set([2, 3, 4]))).toEqual(new Set([2, 3]));
    expect(getCommonValues(new Set([1, 2, 3]), new Set([4, 5, 6]))).toEqual(new Set([]));
    expect(getCommonValues(new Set([1, 2, 3]), new Set([3, 4, 5]))).toEqual(new Set([3]));
});
