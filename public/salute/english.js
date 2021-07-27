const configuration = require('./salute.json');

// salute/english.js
const salute = function () {
    console.log(configuration.english);
}

module.exports = salute;
