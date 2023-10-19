const { getCommonValues } = require('./exercise1');

test('getCommonValues returns the common values between two sets', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([2, 3, 4]);
    expect(getCommonValues(set1, set2)).toEqual(new Set([2, 3]));
    
    const set3 = new Set([1, 2, 3]);
    const set4 = new Set([4, 5, 6]);
    expect(getCommonValues(set3, set4)).toEqual(new Set());
    
    const set5 = new Set([1, 2, 3]);
    const set6 = new Set([3, 4, 5]);
    expect(getCommonValues(set5, set6)).toEqual(new Set([3]));
});
