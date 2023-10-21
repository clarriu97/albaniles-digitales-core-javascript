const { printMap } = require('./index');

test('printMap', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    printMap(new Map([['a', 1], ['b', 2], ['c', 3]]));
    expect(consoleSpy).toHaveBeenCalledWith('a => 1');
    expect(consoleSpy).toHaveBeenCalledWith('b => 2');
    expect(consoleSpy).toHaveBeenCalledWith('c => 3');
    consoleSpy.mockRestore();
});
    
