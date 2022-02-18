const webassembly = require("webassembly");

webassembly.load("ggt.wasm").then(module => {
    console.log(module.exports.ggT(30, 18));
})