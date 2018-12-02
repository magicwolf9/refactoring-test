express = require("express");
axios = require("axios");

let app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
});


app.get('/path', async function (req, res) {
    console.log(req.query.x);

    const r = await axios.get(`http://google.com/search?q=${req.query.x}`);

    console.log(r.status);
    res.send(r.status);
});

app.listen(3000);