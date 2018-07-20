const utils = require('./utils');

test('update util test', () => {
    const out = '{\n    host: hexlet.io\n  + timeout: 20\n  - timeout: 50\n  - proxy: 123.234.53.22\n  + verbose: true\n}';
    expect(utils.updateIn({"a-key": 1}, ["a-key"], (val) => inc(val))).toBe({"a-key": 2});
});
