// Not mine
const getIn = (map, path) => path.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, map);
const setIn = (map, path, val) => {
    console.log("ARGS:" + map + path + val);
    const [current, ...rest] = path;
    console.log("Map on step:" + map + map[current]);
    console.log("CURRENT:" + current)
    if (current === undefined) {
        console.log("Returning a val");
        return val;
    } else {
        return map.set(current, setIn(map[current], rest, val));
    }
};

const updateIn = (map, path, f) => {
    const val = getIn(path, map);
    console.log("Val:" + val);
    const newVal = f(val);
    return newVal;
};

module.exports = {"updateIn": updateIn,
                  "setIn": setIn};
