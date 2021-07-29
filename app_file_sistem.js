const fs = require('fs');
// asynchronous call
fs.readFile(__dirname + '/fruits.js', 'utf8', function (error, data){
    console.log('asynchronous call')
    console.log(data);

});

console.log('I print first because reaFile is asynchronous call');
