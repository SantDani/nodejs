const fs = require('fs');
// synchronized call
const text = fs.readFileSync(__dirname + '/fruits.js', 'utf8');

console.log(text);
