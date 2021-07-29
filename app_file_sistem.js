const fs = require('fs');
const zlib = require('zlib');


const file_data = __dirname + '/data/plrabn12.txt';
const file_result = __dirname + '/data/output_console.txt';
const file_compressed = __dirname + '/data/file_compressed.txt.gz'
const gzip = zlib.createGzip();

// buffer size 16kb
const buffer = 16 * 1024;

const stream_Read = fs.createReadStream(file_data,
    {encoding: 'utf8', highWaterMark: buffer});
const stream_writing = fs.createWriteStream(file_result);
const stream_compressed_writing = fs.createWriteStream(file_compressed);


// This emits the stream of reading. Emits when buffer is full.
stream_Read.pipe(stream_writing);

// This write the file compressed
stream_Read.pipe(gzip).pipe(stream_compressed_writing);


