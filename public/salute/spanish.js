const configuration = require('./salute.json');

// salute/spanish.js
const salute = function () {
    console.log(configuration.spanish);
}

module.exports = salute;
