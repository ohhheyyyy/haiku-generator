var fs = require('fs');
var haiku = require('./haiku');

var cmudictFile = haiku.readCmudictFile('./cmudict.txt');
haiku.formatData(cmudictFile);

var syllablesArr = haiku.createArray(cmudictFile);

console.log("Here's your first haiku:\n", haiku.createHaiku([
    [1, 0, 1],
    [3, 0, 1],
    [0, 2, 0]
], syllablesArr));


console.log("Here's another haiku: \n", haiku.createHaiku([
    [5],
    [7],
    [5]
], syllablesArr));
