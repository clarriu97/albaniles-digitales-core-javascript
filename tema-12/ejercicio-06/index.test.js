const { filterSetByRange } = require('./index');

test('filterSetByRange', () => {
    expect(filterSetByRange(new Set([1, 2, 3]), 1, 2)).toEqual(new Set([1, 2]));
    expect(filterSetByRange(new Set([1, 2, 3]), 1, 3)).toEqual(new Set([1, 2, 3]));
    expect(filterSetByRange(new Set([1, 2, 3]), 2, 3)).toEqual(new Set([2, 3]));
    expect(filterSetByRange(new Set([1]), 1, 1)).toEqual(new Set([1]));
});
