// var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
    var chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
    // process.stdin.emit('end');
});

const add = tokens => tokens.reduce(((a, b) => a + b), 0);

process.stdin.on('end', function () {
    buf.split('\n').forEach(function (line) {
        const tokens = line.split(' ').map(x => parseInt(x));
        if (tokens.length !== 2) return;
        console.log(add(tokens));
    });
});
