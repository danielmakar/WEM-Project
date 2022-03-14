const fs = require("fs");
const { pipeline } = require("stream/promises");

const file1 = process.argv[2];
const file2 = process.argv[3];

let lines1 = [];
let lines2 = [];
let linesMerged = [];

console.time("Perfmormace fs.createReadStream");

async function run() {
    await pipeline(
        fs.createReadStream(file1, "utf-8"),
        async function (source) {
            for await (const chunk of source) lines1.push(...chunk.split("\n"));
        }
    );
    await pipeline(
        fs.createReadStream(file1, "utf-8"),
        async function (source) {
            for await (const chunk of source) lines2.push(...chunk.split("\n"));
        }
    )
    if (lines1.length && lines2.length) {
        lines1.forEach((line, i) => linesMerged[i] = `${lines1[i]} ${lines2[i]}`);
        console.timeEnd("Perfmormace fs.createReadStream");
    } 

}
run();