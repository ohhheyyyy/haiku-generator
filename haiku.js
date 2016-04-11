console.log("Node starting...");


var fs = require('fs');
console.log( fs.readFileSync('./cmudict.txt') );

console.log(fs);