const express = require("express");
const axios = require("axios");
const fs = require('fs');

let app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
});


app.get('/path', async function (req, res) {
    console.log(req.query.x);

    const r = await axios.get(`http://google.com/search?q=${req.query.x}`);

    res.send(r.data);
});

app.get('/path2', function (req, res) {
    console.log(req.query.x, req.query.y, req.query.op);

    let k = "";
    if (req.query.op === "/") {
        k = req.query.x / req.query.y;
    } else if (req.query.op === "*") {
        k = req.query.x * req.query.y;
    } else if (req.query.op === "+") {
        k = req.query.x + req.query.y;
    } else if (req.query.op === "-") {
        k = req.query.x - req.query.y;
    } else {
        k = "-";
    }

    res.send("" + k);
});

app.get('/path3', function (req, res) {
    let i = fs.readFileSync('./file2.txt', 'utf8');
    fs.writeFileSync('./file2.txt', ++i);


    fs.readFile('./file.txt', 'utf8', function(err,data){
        if (err) {
            res.send('bad');
        }
        res.send(data);
    });
});


app.listen(3000);