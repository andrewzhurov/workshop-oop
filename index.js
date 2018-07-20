const i = require('immutable');

const main = (feed, command) => {
    switch (command) {
    case "reverse":
        return feed.updateIn(["rss", "channel", "item"], (val) => "Blebl");
        break;
    default:
        return feed;
    }
};

//export default main;
module.exports = {"main": main};
