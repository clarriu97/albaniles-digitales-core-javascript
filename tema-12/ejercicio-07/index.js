
function printMap(map) {
    for (let [key, value] of map) {
        console.log(`${key} => ${value}`);
    }
}

printMap(new Map([['a', 1], ['b', 2], ['c', 3]])); // a => 1, b => 2, c => 3

