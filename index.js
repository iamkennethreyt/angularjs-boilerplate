const express = require('express');
const fetch = require('node-fetch')
const app = express();

app.use(express.static(__dirname + '/public'));         

app.get('/api/readapi', (req, res) => {
    fetch('https://newsapi.org/v2/top-headlines?country=ph&apiKey=1d736559caa642f3bcc6076797b42e52')
    .then(response => response.json())
    .then(json => res.send(json))
});

app.get('*', (req,res) => res.sendfile("./public/index.html"));

app.listen(8080, () => console.log(`App listening on port 8080`));