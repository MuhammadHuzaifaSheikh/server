const cors = require('cors');
const express = require('express');
const bodeParser = require('body-parser')
const app = express();

app.use(cors());
app.use(bodeParser.json({limit: '5000kb'}))

const todoos = ["a", "b"]

app.get('/test', function (req, res) {
    res.send({todoos});
})

app.post('/test', function (req, res) {
    console.log(req.body);
    todoos.push(req.body)
    res.end()
})


app.set('port', process.env.PORT || 5000);

let server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port' + server.address().port);
});