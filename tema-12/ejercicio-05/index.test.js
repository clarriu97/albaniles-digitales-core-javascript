const { getMinMax } = require('./index');

test('getMinMax', () => {
    expect(getMinMax(new Set([1, 2, 3, 4, 5]))).toEqual([1, 5]);
    expect(getMinMax(new Set([5, 4, 3, 2, 1]))).toEqual([1, 5]);
    expect(getMinMax(new Set([1, 5, 2, 4, 3]))).toEqual([1, 5]);
    expect(getMinMax(new Set([1]))).toEqual([1, 1]);
    expect(getMinMax(new Set([-9, 2, 0, 50]))).toEqual([-9, 50]);
    expect(() => getMinMax(new Set())).toThrow('Set cannot be empty');
});
