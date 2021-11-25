const fs = require("fs");

const file1 = process.argv[2];
const file2 = process.argv[3];

let lines1 = [];
let lines2 = [];
let linesMerged = [];

console.time("Perfmormace fs.readFile");

// https://kaul.inf.h-brs.de/wem/#app-8-0&07_node=page-48
fs.readFile(file1, "utf-8", callback(lines1));
fs.readFile(file2, "utf-8", callback(lines2));

function callback(lines) {
    return function(err, data) {
        lines.push(...data.split("\n"));
        if (lines1.length && lines2.length) {
            lines1.forEach((line, i) => linesMerged[i] = `${lines1[i]} ${lines2[i]}`);
            console.timeEnd("Perfmormace fs.readFile");
        }
    }
}