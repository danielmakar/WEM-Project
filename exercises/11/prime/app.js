const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}\\index.html`);
});

app.post("/", upload.array('files'), (req, res) => {
    let lines1 = [];
    let lines2 = [];
    let linesMerged = "";

    fs.readFile(req.files[0].path, "utf-8", callback(lines1));
    fs.readFile(req.files[1].path, "utf-8", callback(lines2));

    function callback(lines) {
        return function (err, data) {
            lines.push(...data.split("\n"));
            if (lines1.length && lines2.length) {
                lines1.forEach((line, i) => linesMerged += `${lines1[i]} ${lines2[i]}\n`);
                fs.writeFile(`${__dirname}\\uploads\\merged_file.txt`, linesMerged, (err) => {
                    if (err) console.log(err);
                });

                fs.unlink(req.files[0].path, (err) => {
                    if (err) console.log(err);
                });
                fs.unlink(req.files[1].path, (err) => {
                    if (err) console.log(err);
                });

                res.sendStatus(200);
            }
        }
    }
});

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
})