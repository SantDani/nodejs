const fs = require('fs');
const file = __dirname + '/data/plrabn12.txt';

// size 16kb
const buffer = 16 * 1024;

// asynchronous call
const steam_reading = fs.createReadStream(file, {encoding: 'utf8', highWaterMark: buffer});

const file_result = __dirname + '/data/output_console.txt';

const stream_writing = fs.createWriteStream(file_result);

/**
 * this Call back reading, It's notify when is read 16kb and buffer is full for write in output_console.txt
 */

steam_reading.on('data', function (buffer){
    // console.log(buffer.length + '************************************************************');
    // console.log(buffer.length + '************************************************************');
    // console.log(buffer.length + '************************************************************');
    // console.log(buffer.length + '************************************************************');
    console.log(buffer);
    stream_writing.write(buffer);
})
console.log('I print first because reaFile is asynchronous call');


