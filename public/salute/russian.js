const configuration = require('./salute.json');

// salute/english.js
const salute = function () {
    console.log(configuration.russian);
}

module.exports = salute;
