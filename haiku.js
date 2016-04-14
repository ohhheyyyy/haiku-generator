var fs = require("fs");

function readCmudictFile(file) {
    return fs.readFileSync(file).toString();
}

var cmudictFile = readCmudictFile('./cmudict.txt');

function formatData(data) {
    // take each line of data, convert to string, then split into array of strings on newlines
    var lines = data.toString().split("\n"),
        lineSplit;
    // loop through each array index in lines   
    lines.forEach(function(line) {
        // and split each line on space
        lineSplit = line.split("  ");
    });
}

function createArray(someText) {
    var startArray = [];
    var lines = someText.split("\n");

    for (var singleLine in lines) {
        var tempLine = lines[singleLine];
        var midpointArray = [];
        var placeholderWord = "";
        var syllableCount = 0;
        for (var i = 0; i < tempLine.length; i++) {
            if (tempLine[i].match(/\d/g) !== null) {
                syllableCount++;
            }
        }
        var newWord = tempLine.split(' ');
        placeholderWord = newWord[0].toString();
        midpointArray.push(syllableCount);
        midpointArray.push(placeholderWord);
        startArray.push(midpointArray);
    }
    var destinationArray = [];
    for (k = 1; k < 11; k++) {
        var placeholderArray = [];
        for (j = 0; j < startArray.length; j++) {
            if (startArray[j][0] === k) {
                placeholderArray.push(startArray[j][1]);
            }
        }
        destinationArray.push(placeholderArray);
    }
    return destinationArray;
}

function createHaiku(structure, syllablesArr) {
    var arrOfWords;
    return structure.map(function(lines) {
        return lines.map(function(syls) {
            arrOfWords = syllablesArr[syls];
            return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
        }).join(' ');
    }).join('\n');
}

// include the above functions as part of module's 
// interface by adding them to module.exports

module.exports = {
    readCmudictFile: readCmudictFile,
    formatData: formatData,
    createArray: createArray,
    createHaiku: createHaiku
};
