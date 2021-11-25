const fs = require("fs");

let fileLength = process.argv[2];
fileLength = fileLength.replace("_", "");
fileLength = parseInt(fileLength);

let content = "";
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let line_count = 0;
let stringLength = 1;
while(line_count < fileLength) {
    content += createContentForLength(alphabet, stringLength, "").join("\n");
    if (line_count % 26 == 0) content += "\n";
    stringLength++;
}

fs.writeFileSync("./alpha_file.txt", content);

// in Anlehnung an https://stackoverflow.com/questions/34127294/how-to-generate-letter-in-all-possible-combinations-with-specific-length-limit
function createContentForLength(input, length, curstr) {
    if(curstr.length == length) {
        line_count++;
        return [ curstr ];
    } 
    let ret = [];
    for(let i = 0; i < input.length; i++) {
        if(line_count >= fileLength) break;
        ret.push.apply(ret, createContentForLength(input, length, curstr + input[i]));
    }
    return ret;
}
