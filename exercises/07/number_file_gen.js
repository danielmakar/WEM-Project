const fs = require("fs");

let fileLength = process.argv[2];
fileLength = fileLength.replace("_", "");
fileLength = parseInt(fileLength);

let content = "";
for (let i = 0; i < fileLength; i++) {
    content += `${i}.`;
    if (i < fileLength - 1) content += "\n";
}
fs.writeFileSync("./number_file.txt", content);
